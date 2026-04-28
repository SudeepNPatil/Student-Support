import React from "react";

// ─── Style Maps ───────────────────────────────────────────────────────────────

const variantStyles = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600 " +
    "shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] " +
    "border border-blue-400/30",
  secondary:
    "bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700 " +
    "shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_28px_rgba(139,92,246,0.45)] " +
    "border border-violet-400/30",
  outline:
    "bg-transparent text-blue-400 border border-blue-400/50 " +
    "hover:bg-blue-400/10 hover:border-blue-400 active:bg-blue-400/20",
  ghost:
    "bg-transparent text-slate-300 border border-white/10 " +
    "hover:bg-white/8 hover:text-white hover:border-white/20 active:bg-white/12",
  danger:
    "bg-red-500/90 text-white hover:bg-red-500 active:bg-red-600 " +
    "shadow-[0_0_18px_rgba(239,68,68,0.3)] hover:shadow-[0_0_26px_rgba(239,68,68,0.45)] " +
    "border border-red-400/30",
  success:
    "bg-emerald-500/90 text-white hover:bg-emerald-500 active:bg-emerald-600 " +
    "shadow-[0_0_18px_rgba(16,185,129,0.3)] hover:shadow-[0_0_26px_rgba(16,185,129,0.45)] " +
    "border border-emerald-400/30",
};

const sizeStyles = {
  xs: "h-7 px-3 text-xs gap-1.5",
  sm: "h-8 px-4 text-sm gap-2",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-11 px-6 text-base gap-2.5",
  xl: "h-13 px-8 text-lg gap-3",
};

const iconOnlySizeStyles = {
  xs: "h-7 w-7",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-11 w-11",
  xl: "h-13 w-13",
};

const radiusStyles = {
  none: "rounded-none",
  sm:   "rounded",
  md:   "rounded-lg",
  lg:   "rounded-xl",
  full: "rounded-full",
};

// ─── Spinner ──────────────────────────────────────────────────────────────────

const spinnerSizeMap = {
  xs: "w-3 h-3",
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-4 h-4",
  xl: "w-5 h-5",
};

const Spinner = ({ size = "md" }) => (
  <svg
    className={`animate-spin ${spinnerSizeMap[size]} shrink-0`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12" cy="12" r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

// ─── Button Component ─────────────────────────────────────────────────────────

/**
 * Button Props:
 * @param {string}        text          - Button label (required). Used as aria-label in iconOnly mode.
 * @param {string}        variant       - "primary" | "secondary" | "outline" | "ghost" | "danger" | "success"
 * @param {string}        size          - "xs" | "sm" | "md" | "lg" | "xl"
 * @param {string}        radius        - "none" | "sm" | "md" | "lg" | "full"
 * @param {ReactNode}     prefixIcon    - Icon before the label
 * @param {ReactNode}     suffixIcon    - Icon after the label (hidden while loading)
 * @param {boolean}       loading       - Shows spinner and disables button
 * @param {string}        loadingText   - Text shown while loading e.g. "Saving..."
 * @param {boolean}       fullWidth     - Stretches button to full container width
 * @param {boolean}       iconOnly      - Hides label, shows only prefixIcon (square button)
 * @param {boolean}       disabled      - Disables the button
 * @param {string}        className     - Extra Tailwind classes
 * @param {function}      onClick       - Click handler
 * @param {string}        type          - "button" | "submit" | "reset"
 */
const Button = ({
  text,
  variant = "primary",
  size = "md",
  radius = "md",
  prefixIcon,
  suffixIcon,
  loading = false,
  loadingText,
  fullWidth = false,
  iconOnly = false,
  disabled = false,
  className = "",
  onClick,
  type = "button",
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const classes = [
    "inline-flex items-center justify-center",
    "font-semibold tracking-wide",
    "transition-all duration-200 ease-out",
    "select-none outline-none",
    "focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
    isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
    fullWidth && !iconOnly ? "w-full" : "",
    !isDisabled ? "active:scale-[0.97]" : "",
    variantStyles[variant] || variantStyles.primary,
    iconOnly ? (iconOnlySizeStyles[size] || iconOnlySizeStyles.md) : (sizeStyles[size] || sizeStyles.md),
    radiusStyles[radius] || radiusStyles.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      aria-label={iconOnly ? text : undefined}
      aria-busy={loading}
      className={classes}
      {...rest}
    >
      {/* Prefix icon or spinner */}
      {loading ? (
        <Spinner size={size} />
      ) : (
        prefixIcon && (
          <span className="shrink-0 inline-flex items-center" aria-hidden="true">
            {prefixIcon}
          </span>
        )
      )}

      {/* Label — hidden in iconOnly mode */}
      {!iconOnly && (
        <span>
          {loading && loadingText ? loadingText : text}
        </span>
      )}

      {/* Suffix icon — hidden while loading */}
      {!loading && suffixIcon && !iconOnly && (
        <span className="shrink-0 inline-flex items-center" aria-hidden="true">
          {suffixIcon}
        </span>
      )}
    </button>
  );
};

export default Button;


// ─── Usage Examples ───────────────────────────────────────────────────────────
//
// import Button from "./Button";
// import { ShoppingCart, ArrowRight, Trash2, CheckCircle, Map, ChevronRight } from "lucide-react";
//
// Variants
// <Button text="Buy Project"   variant="primary"   prefixIcon={<ShoppingCart size={15} />} />
// <Button text="Book Session"  variant="secondary"  suffixIcon={<ArrowRight size={15} />} />
// <Button text="View Details"  variant="outline" />
// <Button text="Cancel"        variant="ghost" />
// <Button text="Delete"        variant="danger"    prefixIcon={<Trash2 size={15} />} />
// <Button text="Approve Idea"  variant="success"   prefixIcon={<CheckCircle size={15} />} />
//
// Sizes
// <Button text="Small"  size="sm" />
// <Button text="Medium" size="md" />
// <Button text="Large"  size="lg" />
//
// Radius
// <Button text="Sharp"   radius="none" />
// <Button text="Pill"    radius="full" />
//
// States
// <Button text="Submit" loading loadingText="Saving..." />
// <Button text="Submit" disabled />
//
// Full width
// <Button text="Get Started" fullWidth />
//
// Icon only (square)
// <Button text="Add item" iconOnly prefixIcon={<Plus size={15} />} />
//
// Both icons
// <Button text="Navigate" prefixIcon={<Map size={15} />} suffixIcon={<ChevronRight size={15} />} />
//
// Submit form button
// <Button text="Submit Form" type="submit" variant="primary" fullWidth />
