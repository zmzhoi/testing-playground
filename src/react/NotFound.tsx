interface IProps {
  path: string;
}

function NotFound({ path }: IProps) {
  return (
    <>
      <h2>404 Not Found</h2>
      <p>해당 페이지를 찾을 수 없습니다.</p>
      <img alt="404" src="https://www.example.com/not-found" />
    </>
  );
}

export default NotFound;
