import React from 'react'
import {
    Link,
} from "react-router-dom";
import './layout.css'
const Nav = () => {
    return <div className="menu">
        <div><Link  className="link" to="/state">တိုင်း / ပြည်နယ်အလိုက်ရှာရန်</Link></div>
        <div><Link  className="link" to="/district">ခရိုင်အလိုက်ရှာရန်</Link></div>
        <div><Link  className="link" to="/party">မြို့နယ်အလိုက်ရှာရန်</Link></div>
        <div><Link  className="link"  to="/voter-list">လွှတ်တော်အလိုက်ရှာရန်</Link></div>
        <div><Link   className="link" to="/about">ပါတီအလိုက်ရှာရန်</Link></div>
        <div><Link   className="link" to="/about">ကိုယ်စားလှယ်လောင်းများ</Link></div>
    </div>

}
export default Nav;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import './layout.css'
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 206,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function Nav() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div className="menu">
//       <FormControl className={classes.formControl}>
//         <InputLabel id="label">တိုင်း / ပြည်နယ်အလိုက်ရှာရန်</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="label">ခရိုင်အလိုက်ရှာရန်</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="label">မြို့နယ်အလိုက်ရှာရန်</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="label">လွှတ်တော်အလိုက်ရှာရန်</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="label">ပါတီအလိုက်ရှာရန်</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="label">ကိုယ်စားလှယ်လောင်းများ</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
          
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
      
//           </div>
//   );
// }
// // ခရိုင်အလိုက်ရှာရန
// // လွှတ်တော်အလိုက်ရှာရန််
// // မြို့နယ်အလိုက်ရှာရန
// // ပါတီအလိုက်ရှာရန််