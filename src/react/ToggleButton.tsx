import useToggle from './hooks/useToggle';

interface Props {
  toggle: boolean;
}

function ToggleButton({ toggle }: Props) {
  const [on, onToggle] = useToggle(toggle);

  return <button onClick={onToggle}>{on ? 'on' : 'off'}</button>;
}

export default ToggleButton;
