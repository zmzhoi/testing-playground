function useUser() {
  return {
    authorized: [true, false, null][Math.floor(Math.random() * 3)],
  };
}
export default useUser;
