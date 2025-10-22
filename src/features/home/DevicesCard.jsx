function DevicesCard({ label, icon: Icon, text }) {
  return (
    <div
      className="border-border-subtle rounded-sm border bg-black p-4"
      style={{
        background: `linear-gradient(to top right, #0f0f0f 70%, rgba(255, 0, 0, 0.1))`,
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-surface-card rounded-sm p-3">
          <Icon className="text-brand text-2xl" />
        </div>
        <h3 className="text-[20px]">{label}</h3>
      </div>
      <p className="text-text-tertiary">{text}</p>
    </div>
  );
}

export default DevicesCard;
