import Image from "next/image";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

type SpeakerAvatarProps = {
  name: string;
  avatarUrl?: string;
};

export function SpeakerAvatar({ name, avatarUrl }: SpeakerAvatarProps) {
  if (avatarUrl) {
    return (
      <Image
        src={avatarUrl}
        alt={name}
        width={48}
        height={48}
        className="size-12 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
      {getInitials(name)}
    </span>
  );
}
