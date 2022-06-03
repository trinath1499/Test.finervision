import axios from "axios";
import React, { useState } from "react";
import './details.css';
function Details()

{
  const [open,setOpen]=useState(false);

  const [second,setSecond]=useState(false);

  const [third,setThird]=useState(false);

  const [fname,setFname]=useState("");

  const [sname,setSname]=useState("");

  const [email,setEmail]=useState("");

  const [tnum,setTnum]=useState();

  const [gender,setGender]=useState();

  const [dob,setDob]=useState();

  const [comment,setComment]=useState("");

  const [err,setErr]=useState("");

  const [post,setPost]=useState();

  function upload(){

    axios.post(`mongodb+srv://admin:pyyUTwTSurDdAfB2@books.4amhy.mongodb.net/?retryWrites=true&w=majority`)

    .then((response) => {

        setPost(response.data);

        alert("Uploaded Successfully")
    });  
  }
function generate()
{
  return{
    "First Name":fname,
    "Surname":sname,
    "Email":email,
    "Telephone Number":tnum,
    "DOB":dob,
    "Gender":gender,
    "Comments":comment
  }
}
  function finish()
  {
    if(comment.length<1)
    {
      setErr("Write any comment")
   
    }
    else{

      setThird(!third);

      upload();

    alert("Details Uploaded "+ fname+ sname+email+comment+gender+tnum+dob)
    }
  }
  function sec(){
     if (fname.length>2 && fname.match(/^[A-Za-z]+$/))
    {
      if(sname.length>1&&sname.match(/^[A-Za-z]+$/))
      {
        if(email.match(/^([\w]+)@([\w]+)+\.([\w]+)$/i))
        {
          setErr("")

          setSecond(!second);

          setOpen(!open)

        }
        else{

          setOpen(true)

          setErr("Invalid email")

        }
    
      }

      else{

        setErr("Surname should contain only alphabets")
      }
    }
    else{
      setErr("First Name should contain only alphabets and minimum of 3 alphabets")

    }
  }

  function thi(){

    let num=tnum.toString();

    if (tnum.length===11 && num.match(/^[0-9]+$/))
    {
      if(gender!=null)
      {
         if(dob!=null)

        {
                setErr("")

          setThird(!third);

          setSecond(!second)

        }

        else{

          setSecond(true)

          setErr("Select your Date of Birth")

        }
   

      }

      else{

        setSecond(true)

        setErr("Select your Gender")

      }

    }
    else{

      setErr("Telephone Number should contain only digits and length must be 11 ")

    }
  }
  return<>
  <div class="main">

    <div class="main1">

  <button class="button" onClick={()=>setOpen(!open)}>Step 1:  Your Details</button>

        {open && <div ><form className='container mt-5' class="div"><div>

            <label >First Name:</label>

            <input type="text" class="form-label" value={fname} onChange={(e)=>{setFname(e.target.value)}} /><br/>

            <label >Surname:</label>

            <input  type="text" class="form-label" value={sname} onChange={(e)=>{setSname(e.target.value)}} /><br/>

            <label >Email Address:</label>

            <input type="text" class="form-label" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>

            <div>{err}</div>

            <button class="button1" onClick={sec}>Next &#8811;</button>

            </div>

        </form></div>}

          <br/>

    <button class="button" >Step 2: More Comments</button>

            {second && <div><form class="div">

            <div style={{display:"block"}}>

              <label >

                Telephone Number:</label> <input class="form-label" type="number" value={tnum} onChange={(e)=>{setTnum(e.target.value)}}/>

              <br/>

               <label > Gender:</label> <select class="form-label" onChange={(e)=>{setGender(e.target.value)}}>

                    <option value="none" selected disabled hidden>Select Gender</option>

                    <option value="m">Male</option>

                    <option value="f">Female</option>

                    <option value="preferNotToSay">Prefer Not To Say</option>

                </select>

                <br/>

                <label >Date of Birth:</label><input class="form-label" type="date"  onChange={(e)=>{setDob(e.target.value)}}/>

                <div>{err}</div>

            <button class="button1" onClick={thi}>Next &#8811;</button>
        </div></form></div>
        }
           <br/>

        <button class="button">Step 3: Final Comments</button>

            {third &&<div class="div"><form  class="div">

              <div style={{display:"block"}}>

                <label >Comments:</label><br/>

                    <textarea class="form-label" value={comment} onChange={(e)=>{setComment(e.target.value)}}/><br/>

                <div>{err}</div><button class="button1" onClick={finish}>Next &#8811;</button>

                </div>
            </form>
            </div>
            }
            </div>
            </div>
            </>
}
export default Details;

           

 