import React,{useEffect,useState} from 'react';
import {Grid,Grow,Container,CircularProgress,makeStyles} from '@material-ui/core';
import Project from '../components/Project';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
}));


export default function Projects() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const classes = useStyles();

  useEffect(()=>{

      const fetch = ()=>{
        axios.get("https://script.google.com/macros/s/AKfycbw33V3utIboH-9H-S-dZj_zL25_CaHH4-1cyBz1IognJmONis9r/exec")
        .then(({data})=>{
          setData(data.projects);
          setLoading(false);
        });
      };

      fetch();

  },[]);


  if(loading){
    return(
      <Grid container spacing={3} justify="center" alignItems="center" style={{ height: '100vh', textAlign: "center" }}>
        <Grid item>
          <CircularProgress size={100} />
        </Grid>
      </Grid>
    )
  }
  else{
    return (
      <div>
        <Container>
          <Grow in>
            <Grid container className={classes.container} >
              {
                  data.map((obj,index)=>{
                    if(obj.project!=="")
                    {
                      return(
                        <Grid key={index} item xs={12} sm={12} md={6}>
                            <Project
                              id={index}
                              mentors={obj.mentors}
                              url = {obj.url}
                            />
                        </Grid>
                      )
                    }
                    else{
                      return null;
                    }
                  })
              }
            </Grid>
          </Grow>
        </Container>
      </div>
    );
  }

}
