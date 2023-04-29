import { Checkbox, FormControlLabel, Grid } from "@mui/material";

export default function ReportDisplayPage(props) {
    
  const formateName = (activityName) => {
    const words = activityName.split(/(?=[A-Z])/);
    const formattedStr = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return formattedStr;
  };

  return (
    <>
      <div className="centered-content" ref={props?.componentRef}>
        <label className="overview-label">Overview</label>
        <h2 className="report-overview-header">Residents Status</h2>
        <Grid className="report-field-grid-container" container spacing={2}>
          {props?.residentData
            ? Object.entries(props.residentData).map(([key, value]) => (
                <Grid
                  className="report-field-grid-container"
                  item
                  xs={12}
                  sm={6}
                >
                  <div className="report-overview-data">
                    <label>{key.replace("_", " ")}</label>
                    <p>{value}</p>
                  </div>
                </Grid>
              ))
            : Object.entries(props.residentsSummary).map(([key, value]) => (
                <Grid
                  className="report-field-grid-container"
                  item
                  xs={12}
                  sm={6}
                >
                  <div className="report-overview-data">
                    <label>{key.replace("_", " ")}</label>
                    <p>{value}</p>
                  </div>
                </Grid>
              ))}
        </Grid>

        <h2 className="report-overview-header">Personal Plans</h2>
        <Grid className="report-field-grid-container" container spacing={2}>
          {Object.entries(props.personalPlans).map(([key, value]) => (
            <Grid className="report-field-grid-container" item xs={12} sm={6}>
              <div className="report-overview-data">
                <label>
                  {key.charAt(0).toLocaleUpperCase() + key.slice(1)}
                </label>
                <p>{value}</p>
              </div>
            </Grid>
          ))}
        </Grid>

        <h2 className="report-overview-header">General Activities</h2>
        <Grid className="report-field-grid-container" container spacing={2}>
          {props.generalActivitiesForumInput
            ? Object.entries(props.generalActivitiesForumInput).map(
                ([key, value]) => (
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            props.generalActivities[
                              props.generalActivitiesForumInput[key].name
                            ]
                              ? true
                              : false
                          }
                          color="primary"
                        />
                      }
                      label={props.generalActivitiesForumInput[key].label}
                    />
                  </Grid>
                )
              )
            : Object.entries(props.generalActivities).map(([key, value]) => (
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={<Checkbox checked={value} color="primary" />}
                    label={formateName(key)}
                  />
                </Grid>
              ))}
        </Grid>
      </div>
    </>
  );
}
