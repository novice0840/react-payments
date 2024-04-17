import{j as e}from"./jsx-runtime-BnIj46N_.js";import{F as B,I as s}from"./Field-B4S9uyLs.js";import"./index-CsdIBAqE.js";const I={title:"Field",component:B},g=["first","second","third","fourth"],n={args:{title:"결제할 카드 번호를 입력해 주세요",description:"본인 명의의 카드만 결제 가능합니다.",labelText:"카드 번호",errMsg:"",children:e.jsx(e.Fragment,{children:g.map((r,C)=>e.jsx(s,{name:r,placeholder:"1234",value:"",isError:!1,handleChange:()=>1,handleOnBlur:()=>1,maxLength:4},C))})}},E=["month","year"],a={args:{title:"카드 유효기간을 입력해 주세요",description:"월/년도(MMYY)를 순서대로 입력해 주세요",labelText:"유효기간",errMsg:"",children:e.jsx(e.Fragment,{children:E.map((r,C)=>e.jsx(s,{name:r,placeholder:r==="month"?"MM":"YY",value:"",isError:!1,handleChange:()=>1,handleOnBlur:()=>1,maxLength:4},C))})}},u={args:{title:"카드 소유자 이름을 입력해 주세요",labelText:"소유자 이름",errMsg:"",children:e.jsx(e.Fragment,{children:Array.from({length:1}).map(()=>e.jsx(s,{name:"ownerName",placeholder:"JOHN DOE",value:"",isError:!1,handleChange:()=>1,handleOnBlur:()=>1}))})}};var t,l,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
    labelText: '카드 번호',
    errMsg: '',
    children: <>\r
        {CARD_NUMBERS_FIELDS.map((name, index) => <Input key={index} name={name} placeholder="1234" value="" isError={false} handleChange={() => 1} handleOnBlur={() => 1} maxLength={4}></Input>)}\r
      </>
  }
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,m,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: '카드 유효기간을 입력해 주세요',
    description: '월/년도(MMYY)를 순서대로 입력해 주세요',
    labelText: '유효기간',
    errMsg: '',
    children: <>\r
        {EXPIRATION_DATE_FIELDS.map((name, index) => <Input key={index} name={name} placeholder={name === 'month' ? 'MM' : 'YY'} value="" isError={false} handleChange={() => 1} handleOnBlur={() => 1} maxLength={4}></Input>)}\r
      </>
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,h,p;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    labelText: '소유자 이름',
    errMsg: '',
    children: <>\r
        {Array.from({
        length: 1
      }).map(() => <Input name="ownerName" placeholder="JOHN DOE" value="" isError={false} handleChange={() => 1} handleOnBlur={() => 1}></Input>)}\r
      </>
  }
}`,...(p=(h=u.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const M=["CardNumbers","ExpirationDate","OwnerName"];export{n as CardNumbers,a as ExpirationDate,u as OwnerName,M as __namedExportsOrder,I as default};
