import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../reducers/study.js";
const { add_item, change_item, delete_item } = actions;

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Form, Input, Button, Space, PageHeader } from "antd";
import {
  ArrowLeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  actions as rootActions,
  allEditingValue,
} from "../../reducers/rootReducer";
const { change_editing } = rootActions;

class StudyControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controlInner">
        <Form>
          <PageHeader
            title="智育总分计算器"
            onBack={() => this.props.change_editing(allEditingValue.NONE)}
            backIcon={
              <>
                <ArrowLeftOutlined></ArrowLeftOutlined>返回
              </>
            }
            subTitle={
              <span>
                智育总分：
                {this.props.sum && this.props.sum.toFixed(3).toString()}
              </span>
            }
          ></PageHeader>
          <p style={{ color: "gray" }}>
            &nbsp; &nbsp;
            注：每门课只需要填成绩和学分就可以计算，但是你仍然可以填课程名，方便你区分每门课
          </p>
          <TransitionGroup>
            {this.props.item.map((v, i) => {
              const [itemName, mark, point, id] = v;
              return (
                <CSSTransition
                  key={id}
                  classNames="component-fade"
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                >
                  <div>
                    <Space
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                    >
                      <Form.Item>
                        <Input
                          addonBefore="课程名"
                          value={itemName}
                          onChange={(e) =>
                            this.props.change_item(
                              id,
                              0,
                              e.nativeEvent.target.value
                            )
                          }
                        ></Input>
                      </Form.Item>
                      <Form.Item>
                        <Input
                          addonBefore="成绩"
                          type={"number"}
                          value={mark}
                          onChange={(e) =>
                            this.props.change_item(
                              id,
                              1,
                              e.nativeEvent.target.value
                            )
                          }
                        ></Input>
                      </Form.Item>
                      <Form.Item>
                        <Input
                          addonBefore="学分"
                          type={"number"}
                          value={point}
                          onChange={(e) =>
                            this.props.change_item(
                              id,
                              2,
                              e.nativeEvent.target.value
                            )
                          }
                        ></Input>
                      </Form.Item>
                      <Form.Item>
                        <MinusCircleOutlined
                          onClick={() => this.props.delete_item(id)}
                        ></MinusCircleOutlined>
                      </Form.Item>
                    </Space>
                  </div>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => this.props.add_item()}
              block
              icon={<PlusOutlined />}
            >
              添加一门课程
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.study.item,
    sum: state.study.sum,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add_item: bindActionCreators(add_item, dispatch),
    change_item: bindActionCreators(change_item, dispatch),
    delete_item: bindActionCreators(delete_item, dispatch),
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyControl);
