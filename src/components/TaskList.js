import React, {Component} from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import TaskItem from "./TaskItem";

class TaskList extends Component {
    render() {
        const { tasks, status } = this.props;
        return (
          <Grid item md={4} xs={12} key={status.value}>
            <Box mt={2} mb={2}>
              <div>{status.label}</div>
            </Box>
            <div>
              {tasks.map(task => {
                return (
                  <TaskItem
                    task={task}
                    status={status}
                    key={task.id}
                  
                  />
                );
              })}
            </div>
          </Grid>
        );
      }
}

export default TaskList;