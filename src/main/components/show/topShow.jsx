import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as echarts from "echarts";
import { allEditingValue } from "../../reducers/rootReducer";

function fixed2(num) {
  return Math.floor(num * 100) / 100;
}

const piePosition = [
  { msg: "9%", center: ["10%", "50%"], radius: ["50%", "75%"] },
  { msg: "29%", center: ["30%", "50%"], radius: ["50%", "60%"] },
  { msg: "49%", center: ["50%", "50%"], radius: ["50%", "60%"] },
  { msg: "69%", center: ["70%", "50%"], radius: ["50%", "60%"] },
  { msg: "89%", center: ["90%", "50%"], radius: ["50%", "60%"] },
];

class TopShow extends React.Component {
  constructor(props) {
    super(props);
    this.showPie = null;
  }

  componentDidMount() {
    let { ability, moral, sport, study, setting } = this.props;
    sport = sport ? sport : 0;
    const result = fixed2(
      moral * (setting.moral / 100) +
        study * (setting.study / 100) +
        sport * (setting.sport / 100) +
        ability * (setting.ability / 100)
    );
    moral = fixed2(moral);
    study = fixed2(study);
    sport = fixed2(sport);
    ability = fixed2(ability);

    this.showPie = echarts.init(document.querySelector("#pie"));
    window.Global.onResizeWindow((e) => {
      this.showPie.resize();
    });
    this.showPie.setOption({
      tooltip: {},
      title: [
        {
          text: result + "\n总分",
          top: "center",
          textAlign: "center",
          textStyle: {
            fontSize: 14,
          },
          left: piePosition[0].msg,
        },
        {
          text: `${moral}\nx${setting.moral}%`,
          top: "center",
          textAlign: "center",
          textStyle: {
            fontSize: 14,
          },
          left: piePosition[1].msg,
        },
        {
          text: `${study}\nx${setting.study}%`,
          top: "center",
          textAlign: "center",
          textStyle: {
            fontSize: 14,
          },
          left: piePosition[2].msg,
        },
        {
          text: `${sport}\nx${setting.sport}%`,
          top: "center",
          textAlign: "center",
          textStyle: {
            fontSize: 14,
          },
          left: piePosition[3].msg,
        },
        {
          text: `${ability}\nx${setting.ability}%`,
          top: "center",
          textAlign: "center",
          textStyle: {
            fontSize: 14,
          },
          left: piePosition[4].msg,
        },
      ],
      series: [
        {
          type: "pie",
          radius: piePosition[0].radius,
          center: piePosition[0].center,
          data: [
            {
              name: "德育",
              label: {
                position: "inside",
              },
              value: moral * (setting.moral / 100),
            },
            {
              name: "智育",
              label: {
                position: "inside",
              },
              value: study * (setting.study / 100),
            },
            {
              name: "体育",
              label: {
                position: "inside",
              },
              value: sport * (setting.sport / 100),
            },
            {
              name: "能力",
              label: {
                position: "inside",
              },
              value: ability * (setting.ability / 100),
            },
            {
              name: "未获得",
              value: 100 - result,
              label: {
                show: false,
              },
              itemStyle: {
                opacity: 0,
              },
            },
          ],
        },
        {
          type: "pie",
          radius: piePosition[1].radius,
          center: piePosition[1].center,
          label: {
            position: "inside",
          },
          data: [
            {
              name: "德育",
              value: moral,
            },
            {
              name: "未获得",
              value: 100 - moral,
              label: {
                show: false,
              },
              itemStyle: {
                opacity: 0,
              },
            },
          ],
          stillShowZeroSum: false,
        },
        {
          type: "pie",
          radius: piePosition[2].radius,
          center: piePosition[2].center,
          label: {
            position: "inside",
          },
          data: [
            {
              name: "智育",
              value: study,
            },
            {
              name: "未获得",
              value: 100 - study,
              label: {
                show: false,
              },
              itemStyle: {
                opacity: 0,
              },
            },
          ],
          stillShowZeroSum: false,
        },
        {
          type: "pie",
          radius: piePosition[3].radius,
          center: piePosition[3].center,
          label: {
            position: "inside",
          },
          data: [
            {
              name: "体育",
              value: sport,
            },
            {
              name: "未获得",
              value: 100 - sport,
              label: {
                show: false,
              },
              itemStyle: {
                opacity: 0,
              },
            },
          ],
          stillShowZeroSum: false,
        },
        {
          type: "pie",
          radius: piePosition[4].radius,
          center: piePosition[4].center,
          label: {
            position: "inside",
          },
          data: [
            {
              name: "能力",
              value: ability,
            },
            {
              name: "未获得",
              value: 100 - ability,
              label: {
                show: false,
              },
              itemStyle: {
                opacity: 0,
              },
            },
          ],
          stillShowZeroSum: false,
        },
      ],
    });
  }

  componentDidUpdate() {
    let { ability, moral, sport, study, setting } = this.props;
    sport = sport ? sport : 0;
    const result = fixed2(
      moral * (setting.moral / 100) +
        study * (setting.study / 100) +
        sport * (setting.sport / 100) +
        ability * (setting.ability / 100)
    );
    moral = fixed2(moral);
    study = fixed2(study);
    sport = fixed2(sport);
    ability = fixed2(ability);
    if (this.props.editing === allEditingValue.NONE) {
      this.showPie.setOption({
        title: [
          {
            text: result + "\n总分",
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[0].msg,
          },
          {
            text: `${moral}\nx${setting.moral}%`,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[1].msg,
          },
          {
            text: `${study}\nx${setting.study}%`,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[2].msg,
          },
          {
            text: `${sport}\nx${setting.sport}%`,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[3].msg,
          },
          {
            text: `${ability}\nx${setting.ability}%`,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[4].msg,
          },
        ],
        series: [
          {
            type: "pie",
            radius: piePosition[0].radius,
            center: piePosition[0].center,
            data: [
              {
                name: "德育",
                label: {
                  position: "inside",
                },
                value: moral * (setting.moral / 100),
              },
              {
                name: "智育",
                label: {
                  position: "inside",
                },
                value: study * (setting.study / 100),
              },
              {
                name: "体育",
                label: {
                  position: "inside",
                },
                value: sport * (setting.sport / 100),
              },
              {
                name: "能力",
                label: {
                  position: "inside",
                },
                value: ability * (setting.ability / 100),
              },
              {
                name: "未获得",
                value: 100 - result,
                label: {
                  show: false,
                },
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: piePosition[1].radius,
            center: piePosition[1].center,
            label: {
              position: "inside",
            },
            data: [
              {
                name: "德育",
                value: moral,
              },
              {
                name: "未获得",
                value: 100 - moral,
                label: {
                  show: false,
                },
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: piePosition[2].radius,
            center: piePosition[2].center,
            label: {
              position: "inside",
            },
            data: [
              {
                name: "智育",
                value: study,
              },
              {
                name: "未获得",
                value: 100 - study,
                label: {
                  show: false,
                },
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: piePosition[3].radius,
            center: piePosition[3].center,
            label: {
              position: "inside",
            },
            data: [
              {
                name: "体育",
                value: sport,
              },
              {
                name: "未获得",
                value: 100 - sport,
                label: {
                  show: false,
                },
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: piePosition[4].radius,
            center: piePosition[4].center,
            label: {
              position: "inside",
            },
            data: [
              {
                name: "能力",
                value: ability,
              },
              {
                name: "未获得",
                value: 100 - ability,
                label: {
                  show: false,
                },
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
          },
        ],
      });
    } else {
      this.showPie.setOption({
        title: [
          {
            text: result + "\n总分",
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[0].msg,
          },
          {
            text: ``,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[1].msg,
          },
          {
            text: ``,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[2].msg,
          },
          {
            text: ``,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[3].msg,
          },
          {
            text: ``,
            top: "center",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
            },
            left: piePosition[4].msg,
          },
        ],
        series: [
          {
            type: "pie",
            radius: piePosition[0].radius,
            center: piePosition[0].center,
            data: [
              {
                name: "德育",
                label: {
                  position: "inside",
                },
                value: moral * (setting.moral / 100),
              },
              {
                name: "智育",
                label: {
                  position: "inside",
                },
                value: study * (setting.study / 100),
              },
              {
                name: "体育",
                label: {
                  position: "inside",
                },
                value: sport * (setting.sport / 100),
              },
              {
                name: "能力",
                label: {
                  position: "inside",
                },
                value: ability * (setting.ability / 100),
              },
              {
                name: "未获得",
                value: 100 - result,
                label: {
                  show: false,
                },
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
          },
          {
            type: "pie",
            radius: piePosition[1].radius,
            center: piePosition[1].center,
            label: {
              position: "inside",
            },
            data: [0],
          },
          {
            type: "pie",
            radius: piePosition[2].radius,
            center: piePosition[2].center,
            label: {
              position: "inside",
            },
            data: [0],
          },
          {
            type: "pie",
            radius: piePosition[3].radius,
            center: piePosition[3].center,
            label: {
              position: "inside",
            },
            data: [0],
          },
          {
            type: "pie",
            radius: piePosition[4].radius,
            center: piePosition[4].center,
            label: {
              position: "inside",
            },
            data: [0],
          },
        ],
      });
    }
  }

  render() {
    return (
      <div className="show-board">
        <div className="inner-show-board">
          <div className="point-show" id="pie"></div>
          <Button
            type="primary"
            style={{ marginLeft: "auto", marginRight: "40px" }}
            onClick={async () => {
              await window.ExportFile.spawnXLSX(this.props.dataObj);
            }}
          >
            生成综测文件 →
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ability: state.ability.sum > 80 ? 100 : state.ability.sum + 20,
    moral: state.moral.total,
    sport: state.sport.total,
    study: state.study.sum,
    setting: state.setting,
    editing: state.global.editing,
    dataObj: {
      message: state.message,
      moral: state.moral,
      sport: state.sport,
      study: state.study,
      ability: state.ability,
      setting: state.setting,
    },
  };
}

export default connect(mapStateToProps, null)(TopShow);
