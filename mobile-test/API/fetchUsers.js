export const fetchUserData = async () => {
  const response = await fetch(
    "https://dev.api.syncremote.co/api/v1/admin/users"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
