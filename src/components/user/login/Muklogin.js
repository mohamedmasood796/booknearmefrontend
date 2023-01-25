// import * as React from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Alert, CircularProgress, FormControl, Snackbar } from "@mui/material";
// import { InputLabel } from "@mui/material";
// import { InputAdornment } from "@mui/material";
// import { IconButton } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { FilledInput } from "@mui/material";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import GoogleIcon from "@mui/icons-material/Google";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import { signIn } from "next-auth/react";
// import instance from "../../../axios/axios";
// import { useDispatch } from "react-redux";
// import { addUserDetails } from "../../../redux/user/userAuthSlicer";
// import Cookies from 'js-cookie'
// import PublicRoute from "../../../protectRoutes/publicRoute";

// const theme = createTheme();

// export default function SignIn({obj}:any) {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [open, setOpen] = React.useState(false);
//   const [message, setMessage] = React.useState("");



//   const handleClose = (
//     event?: React.SyntheticEvent | Event,
//     reason?: string
//   ) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsLoading(true);
//     const data = new FormData(event.currentTarget);
//     // if(data.get("email") || )
//     try {
//       const user = await instance.post("/auth/user/login", data, {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (user) {
//         console.log(user)
//         localStorage.setItem(
//           "userName",
//           user.data.result.firstName + " " + user.data.result.lastName
//         );
//         localStorage.setItem("email", user.data.result.email);
//         localStorage.setItem("userId", user.data.result._id);
//         localStorage.setItem("userToken", user.data.accessToken.access_token);
//         localStorage.setItem("image", user.data.result.image);
//         Cookies.set("userToken", user.data.accessToken.access_token)
//         dispatch(addUserDetails(user.data));
//         router.push("/");
//       }
//     } catch (error: any) {
//       const type = typeof error.response.data.message;
//       if (type == "string") {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage(error.response.data.message[0]);
//       }
//       setOpen(true);
//       setIsLoading(false);
//     }
//   };

//   async function handleGoogleSignUp() {
//     signIn("google", { callbackUrl: "http://localhost:3000/" });
//   }

//   async function handleGithubSignUp() {
//     signIn("github", { callbackUrl: "http://localhost:3000/" });
//   }

//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     event.preventDefault();
//   };

//   const SignUpPage = () => router.push("/user/signup");

//   return (
//     <PublicRoute>
//       <ThemeProvider theme={theme}>
//         <Box
//           bgcolor={"white"}
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             alignItems: "center",
//             marginTop: 10,
//           }}
//         >
//           <Container
//             component="main"
//             sx={{ marginLeft: { xl: 24, xs: "auto" } }}
//             maxWidth="xs"
//           >
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Typography component="h1" variant="h5">
//                 SIGN IN
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 1 }}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="email"
//                       label="Email Address"
//                       name="email"
//                       autoComplete="email"
//                       variant="filled"
//                       size="small"
//                       InputProps={{
//                         disableUnderline: true,
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <FormControl fullWidth required variant="filled">
//                       <InputLabel htmlFor="filled-adornment-password">
//                         Password
//                       </InputLabel>
//                       <FilledInput
//                         id="filled-adornment-password"
//                         type={showPassword ? "text" : "password"}
//                         required
//                         name="password"
//                         endAdornment={
//                           <InputAdornment position="end">
//                             <IconButton
//                               aria-label="toggle password visibility"
//                               onClick={handleClickShowPassword}
//                               onMouseDown={handleMouseDownPassword}
//                               edge="end"
//                             >
//                               {showPassword ? (
//                                 <VisibilityOff />
//                               ) : (
//                                 <Visibility />
//                               )}
//                             </IconButton>
//                           </InputAdornment>
//                         }
//                       />
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           value="TermsAndConditions"
//                           defaultChecked
//                           sx={{
//                             color: "#38d39f",
//                             "&.Mui-checked": {
//                               color: "#38d39f",
//                             },
//                           }}
//                           color="primary"
//                         />
//                       }
//                       label="Accept Terms And Conditions"
//                     />
//                   </Grid>
//                 </Grid>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{
//                     mt: 3,
//                     mb: 2,
//                     backgroundColor: "#38d39f",
//                     height: 50,
//                     "&:hover": { backgroundColor: "#38d39f" },
//                   }}
//                   style={{ backgroundColor: "#38d39f" }}
//                 >
//                   {isLoading ? (
//                     <CircularProgress sx={{ color: "white" }} />
//                   ) : (
//                     "Sign In"
//                   )}
//                 </Button>
//                 <p style={{ marginLeft: "48%", paddingBottom: 15 }}>or</p>
//                 <Button
//                   variant="contained"
//                   onClick={handleGoogleSignUp}
//                   sx={{
//                     backgroundColor: "#ffffff",
//                     color: "black",
//                     marginBottom: 2,
//                     width: "100%",
//                     height: 50,
//                     "&:hover": { backgroundColor: "#ffffff", color: "black" },
//                   }}
//                   endIcon={<GoogleIcon />}
//                 >
//                   Sign In With Google
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={handleGithubSignUp}
//                   sx={{
//                     backgroundColor: "#ffffff",
//                     color: "black",
//                     width: "100%",
//                     height: 50,
//                     "&:hover": { backgroundColor: "#ffffff", color: "black" },
//                   }}
//                   endIcon={<GitHubIcon />}
//                 >
//                   Sign In With Github
//                 </Button>
//               </Box>
//               <div className="flex justify-center flex-col mt-3">
//                 <p className="text-center">Does not have an account? <span onClick={SignUpPage} className="cursor-pointer hover:text-[#38d39f]">Sign Up</span> </p>
//               </div>
//             </Box>
//           </Container>
//           <Box
//             sx={{
//               width: "50%",
//               display: { xs: "none", md: "flex" },
//               justifyContent: "flex-start",
//             }}
//           >
//             <Image
//               src="https://preview.colorlib.com/theme/bootstrap/login-form-08/images/undraw_file_sync_ot38.svg"
//               alt=""
//               width={480}
//               height={480}
//             />
//           </Box>
//           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//             <Alert
//               onClose={handleClose}
//               severity="error"
//               sx={{ width: "100%" }}
//             >
//               {message}
//             </Alert>
//           </Snackbar>
//         </Box>
//       </ThemeProvider>
//     </PublicRoute>
//   );
// }


// export async function getServerSideProps({req}:any){
//   const obj:null=null
//   return {
//     props:{
//       obj
//     }
//   }
// }