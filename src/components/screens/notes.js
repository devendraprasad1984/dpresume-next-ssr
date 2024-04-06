import PropTypes from "prop-types";
import React from "react";

import OneLinerHeader from "../common/oneLinerHeader";
import GridVanila from "../common/gridVanila";
import { config } from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import NoData from "../common/nodata";

const Notes = (props) => {
  const { data, loading, error, time } =useAPI(
    config.endpoints.LeadershipBehavioural
  );

  if (loading) return <NoData text={config.messages.PLZ_WAIT}/>;
  if (error) return <NoData text={config.messages.ERROR}/>;

  return (
    <div className="wid95">
      <OneLinerHeader title={props.title} />

      <div>
        <span>Leadership / Behavioural aspects</span>
        <GridVanila data={data} style={{ height: "100%", width:'100%' }} />
      </div>

      {!config.endpoints.islocal && (
        <iframe
          className="my_notes"
          src="https://drive.google.com/file/d/1rOr4G8if6mjdYkOdUZPorGMgDkvBJu6K/preview"
          allow="autoplay"
          frameBorder="0"
          scrolling="yes"
          seamless="seamless"
        ></iframe>
      )}
    </div>
  );
};
Notes.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(Notes);
