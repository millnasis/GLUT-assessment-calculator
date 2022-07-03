import React from "react";
import { connect } from "react-redux";

class SportShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sum, total, base, baseItem } = this.props;
    total = total && total.toFixed(3);
    base = base && base.toFixed(3);
    return (
      <tbody>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl90"
            style={{ height: " 14.25pt" }}
          >
            体育加减分总计=<font className="font15">(</font>
            <font className="font0">
              <strong>{sum}</strong>）<span>&nbsp;&nbsp;&nbsp;&nbsp; </span>
              体育总分=基础分（
              <span>&nbsp;&nbsp; </span>
              <strong>{base}</strong>
              <span>&nbsp; </span>） +加减分总计（<span>&nbsp; </span>
              {sum}
              <span>&nbsp;&nbsp; </span>） =（<span>&nbsp; </span>
              <strong>{total}</strong>
              <span>&nbsp; </span>）
            </font>
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl85"
            style={{ height: " 14.25pt" }}
          >
            体育基础分=(学生体质健康测试
            <font className="font12">
              &nbsp;
              {baseItem[0][1]}
              <span>&nbsp; </span>
            </font>
            <font className="font6">*60% + 专业考试成绩</font>
            <font className="font30">&nbsp;{baseItem[1][1]}</font>
            <font className="font12"> </font>
            <font className="font13">
              <span>&nbsp;</span>
            </font>
            <font className="font6">*40%)*70% + 课外锻炼分</font>
            <font className="font12">&nbsp;{baseItem[2][1]} </font>
            <font className="font6">
              <span>&nbsp;</span>*30%={base}
            </font>
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl70"
            style={{
              borderRight: " 0.5pt solid black",
              height: " 14.25pt",
            }}
          >
            　
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.sport,
  };
}

export default connect(mapStateToProps, null)(SportShow);
