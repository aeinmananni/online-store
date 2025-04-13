export default function Paper(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="100"
      height="100"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4H48V60L32 52L16 60V4Z"
        fill="#fef3c7"
        stroke="#f59e0b"
        stroke-width="2"
      />
      <line x1="20" y1="12" x2="44" y2="12" stroke="#f59e0b" stroke-width="2" />
      <line x1="20" y1="20" x2="44" y2="20" stroke="#f59e0b" stroke-width="2" />
      <line x1="20" y1="28" x2="44" y2="28" stroke="#f59e0b" stroke-width="2" />
    </svg>
  );
}
