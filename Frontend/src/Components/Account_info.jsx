import React from "react";
import { User, Mail, Phone, MapPin, Calendar, AtSign, Shield, Lock, Trash2, Pencil, Save, X } from "lucide-react";
import { formatDateOnly, formatMonthYear } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const Field = ({ label, value, icon: Icon, badge, editing, name, onChange }) => (
  <div className="flex justify-between items-center py-3.5 border-b border-gray-100 last:border-0">
    <div className="flex items-center gap-2 text-gray-500 text-sm min-w-[110px]">
      <Icon size={14} />
      {label}
    </div>
    {badge ? (
      <span className="text-xs font-semibold px-3 py-1 rounded-md bg-green-100 text-green-700">{value}</span>
    ) : editing && name ? (
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={onChange}
        className="text-sm text-gray-800 border border-gray-200 rounded-lg px-3 py-1.5 w-56 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
      />
    ) : (
      <span className="text-sm text-gray-800">{value}</span>
    )}
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
    <div className="px-5 py-3.5 border-b border-gray-100">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
    </div>
    <div className="px-5">{children}</div>
  </div>
);

export default function AccountInfo() {
  const [userData, setUserData] = React.useState(null);
  const [editing, setEditing] = React.useState(false);
  const [form, setForm] = React.useState({});
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/User/me`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setForm(data);
      })
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEdit = () => {
    setForm(userData);
    setEditing(true);
    setError(null);
  };

  const handleCancel = () => {
    setForm(userData);
    setEditing(false);
    setError(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/User`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          phone: form.phone,
          dob: form.dob,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
          username: form.username,
        }),
      });

      if (!res.ok) throw new Error("Failed to save. Please try again.");

      const updated = await res.json();
      setUserData(updated);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handledelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) return;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/User`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to delete account. Please try again.");

      const data = await res.json();
      setUserData(null);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const initials =
    userData?.firstname && userData?.lastname
      ? `${userData.firstname[0]}${userData.lastname[0]}`
      : "?";

  const display = editing ? form : userData;

  return (
    <div className="max-w-xl mx-auto px-4 py-32">

      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xl flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {display?.firstname} {display?.lastname}
          </p>
          <p className="text-sm text-gray-400">
            Member since {formatMonthYear(userData?.createdAt)}
          </p>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {editing ? (
            <>
              <button
                onClick={handleCancel}
                disabled={saving}
                className="flex items-center gap-1.5 text-sm border border-gray-200 px-3 py-1.5 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <X size={13} /> Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-1.5 text-sm border border-blue-300 bg-blue-50 px-3 py-1.5 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors disabled:opacity-50"
              >
                <Save size={13} />
                {saving ? "Saving..." : "Save"}
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="flex items-center gap-1.5 text-sm border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Pencil size={13} /> Edit
            </button>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Personal Info */}
      <Section title="Personal Information">
        <Field label="First name" value={display?.firstname} icon={User} editing={editing} name="firstname" onChange={handleChange} />
        <Field label="Last name" value={display?.lastname} icon={User} editing={editing} name="lastname" onChange={handleChange} />
        <Field label="Email" value={display?.email} icon={Mail} editing={editing} name="email" onChange={handleChange} />
        <Field label="Phone" value={display?.phone} icon={Phone} editing={editing} name="phone" onChange={handleChange} />
        <Field label="Date of birth" value={editing ? form?.dob : userData?.dob } icon={Calendar} editing={editing} name="dob" onChange={handleChange} />
      </Section>

      {/* Address */}
      <Section title="Address">
        <Field label="City" value={display?.city} icon={MapPin} editing={editing} name="city" onChange={handleChange} />
        <Field label="State" value={display?.state} icon={MapPin} editing={editing} name="state" onChange={handleChange} />
        <Field label="Pincode" value={display?.pincode} icon={MapPin} editing={editing} name="pincode" onChange={handleChange} />
      </Section>

      {/* Account */}
      <Section title="Account">
        <Field label="Username" value={display?.username} icon={AtSign} editing={editing} name="username" onChange={handleChange} />
        <Field label="Account type" value={userData?.role} icon={Shield} badge />
        {/* <Field label="Password" value="••••••••" icon={Lock} /> */}
      </Section>

      {/* Delete */}
      <button onClick={handledelete} className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 text-sm text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors">
        <Trash2 size={14} /> Delete account
      </button>

    </div>
  );
}