import { Container } from './styles';

export function ButtonText({ title, isActive = true, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {title}
    </Container>
  );
}
