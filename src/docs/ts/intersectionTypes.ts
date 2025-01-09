// intersectionTypes

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface Users {
  users: { username: string }[];
}

interface Articles {
  artists: { article: string }[];
}

type UsersResponse = Users & ErrorHandling;
type ArticlesResponse = Articles & ErrorHandling;
const handleArtistsResponse = (response: UsersResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.users);
};
