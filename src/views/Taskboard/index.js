import React, { Component } from "react";
import { STATUSES } from "../../configs/Constants";
import Grid from "@mui/material/Grid";
import TaskList from "../../components/TaskList";
import Button from '@mui/material/Button';

const listTask = [
    {
        id:1,
        title : "Read book",
        description: "Read material ui",
        status:0

    },
    {
        id:2,
        title : "Read book",
        description: "Read material ui",
        status:2

    },
    {
        id:3,
        title : "Play game",
        description: "Read material ui",
        status:1

    }
];


class Taskboard extends Component {
    renderBoard() {
        // const { classes } = this.props;
        let xhtml = null;
        xhtml = (
          <Grid container spacing={2}>
            {STATUSES.map(status => {
              const taskFiltered = listTask.filter(
                task => task.status === status.value,
              );
              return (
                <TaskList
                  key={status.value}
                  tasks={taskFiltered}
                  status={status}
                />
                
                // <Grid item md={4} xs={12} key={status.value}>
                //   <div>{status.label}</div>
                //   <div>{taskFiltered.map(task=>{
                //     return <h1>{task.title}</h1>
                //   })}</div>

                // </Grid>
              );
            })}
          </Grid>
        );
        return xhtml;
      }

    render() {
      // const { classes } = this.props;
        return (
            <div >
              <Button  variant="contained" color="primary">
               Them moi cong viec
              </Button>
              {this.renderBoard()}
               
            </div>
        );
    }
}
export default Taskboard;