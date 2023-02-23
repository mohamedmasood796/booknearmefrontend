import React,{useEffect} from "react";
import { useSearchParams } from 'react-router-dom';
import { verify } from "../../../api/authReq";

function Success() {
  const [searchParams] = useSearchParams()
    const newOrder = searchParams.get('token')
    console.log(newOrder,"eth varum mydoc");
     useEffect(() => {
       verify(newOrder)
     }, [newOrder])
  return (
    <>
      <h2>Thanks for your order!</h2>
      <h4>Your payment is successful.</h4>
      <p>
        We appreciate your business! If you have any questions, please email us
        at
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </p>
      <div>
      </div>
    </>
  );
}

export default Success;