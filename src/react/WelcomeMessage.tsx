interface Props {
  authorized: boolean;
  username?: string;
}

function WelcomeMessage({ authorized, username }: Props) {
  const welcomeMessage = authorized
    ? `환영합니다! ${username || '이름없음'}님`
    : '로그인을 해주세요.';

  return (
    <div>
      <p>{welcomeMessage}</p>
    </div>
  );
}

export default WelcomeMessage;
