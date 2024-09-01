import SButton from "../../components/Button";
import TextWithInputLabel from "../../components/TextInputWithLabel";
import { Form } from "react-bootstrap";

export default function SForm({ handleChange, handleSubmit, isLoading, form }) {
  return (
    <Form>
      <TextWithInputLabel
        label="Email"
        type="email"
        placeholder="Masukan email!"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <TextWithInputLabel
        label="Password"
        type="password"
        placeholder="Masukan password!"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <SButton action={handleSubmit} loading={isLoading} disabled={isLoading}>
        Signin
      </SButton>
    </Form>
  );
}
