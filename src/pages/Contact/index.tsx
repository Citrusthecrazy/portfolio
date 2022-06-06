import { useState } from "react";
import styled from "styled-components";
import { Container, Title } from "../Home";

const Input = ({ type, value, onChange, className, ...props }: any) => {
  return (
    <div className={className}>
      <input type={type} value={value} onChange={onChange} {...props} />
    </div>
  );
};

const TextArea = ({ type, value, onChange, className, ...props }: any) => {
  return (
    <div className={className}>
      <textarea type={type} value={value} onChange={onChange} {...props} />
    </div>
  );
};

const StyledInput = styled(Input)`
  width: 35.25rem;
  height: 3.8rem;

  background: #313f59;
  border-radius: 10px;

  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: white;
    padding-left: 0.5rem;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(167, 181, 209, 0.5);
      opacity: 0.5; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(167, 181, 209, 0.5);
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(167, 181, 209, 0.5);
    }
  }
`;

interface TextAreaProps {
  rows: number;
}

const StyledTextArea = styled(TextArea)<TextAreaProps>`
  margin-top: 1rem;
  width: 35.25rem;
  height: ${(props) => "calc(1em + " + props.rows + ")"};

  background: #313f59;
  border-radius: 10px;

  & textarea {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: white;
    padding-left: 0.5rem;
    resize: none;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(167, 181, 209, 0.5);
      opacity: 0.5; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(167, 181, 209, 0.5);
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(167, 181, 209, 0.5);
    }
  }
`;

const Button = styled.button`
  margin-top: 1rem;

  border: none;

  width: 12.8rem;
  height: 4.3rem;

  background: #3ace3f;
  border-radius: 10px;

  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: white;
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background: hsl(122.02, 60.16%, 44%);
  }
`;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container>
      <div>
        <Title>Let's get in touch</Title>
        <StyledInput
          type="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Your e-mail"
        />
        <StyledTextArea
          rows={5}
          type="email"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <Button>Send</Button>
      </div>
    </Container>
  );
};

export default Contact;
