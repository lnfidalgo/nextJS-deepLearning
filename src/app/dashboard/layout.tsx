export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const role = (roles: string) => {
    return roles;
  };
  return <>{role("user") === "admin" ? admin : user}</>;
}
