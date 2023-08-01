import { Container } from './styles';

export function Input({ icon: Icon, ...rets }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rets} />
    </Container>
  );
}
