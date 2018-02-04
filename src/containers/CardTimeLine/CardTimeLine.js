import React from 'react';
import './CardTimeLine.css';
import { Card, Flex, WhiteSpace } from 'antd-mobile';
import { Rate } from 'antd';

class CardTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    fetch('http://wow9144.github.io/productList.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          list: json.data
        })
      });
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((v, i) => {
            return (
              <div key={i}>
                <Flex>
                  <Flex.Item>
                    <Card full>
                      <Card.Header
                        title={v.name}
                        thumb={v.image}
                        extra={<span>{v.address1}/{v.address2}</span>}
                      />
                      <Card.Body>
                        <div>{v.description}</div>
                      </Card.Body>
                      <Card.Footer content={v.category} extra={<div>{<Rate allowHalf defaultValue={v.grade} />}</div>} />
                    </Card>
                  </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default CardTimeLine;