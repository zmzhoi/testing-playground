interface User {
  id: number;
  name: string;
}
export function fetchUser(userId: number) {
  return new Promise((resolve, reject) => {
    const user: User[] = [
      {
        id: 1,
        name: 'zmzhoi1',
      },
      {
        id: 2,
        name: 'zmzhoi2',
      },
    ];
    setTimeout(() => {
      resolve(user.find((user) => user.id === userId));
    }, 1000);
  });
}
