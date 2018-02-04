import React from 'react';
import './CardTimeLine.css';
import { Card, Flex, WhiteSpace } from 'antd-mobile';
import { Rate } from 'antd';

class CardTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          category: "헬스",
          image: "https://s3-ap-northeast-2.amazonaws.com/tlx.production/a8fuZbIWTraIV2n5Xh1ShdEhznbF53HBzYjiZIBjy6wGLLdQt2zyEcRHA5e7OTe9_300",
          name: "시그마 스포츠 클럽",
          description: "잠실역 부근 종합 트레이닝 센터",
          address1: "송파구",
          address2: "잠실",
          grade: 4
        },
        {
          category: "운동",
          image: "https://s3-ap-northeast-2.amazonaws.com/tlx.production/55Dds9eBId6IuZwbMyGyzKC8oafEMexJz3nQaUVJ7u7xWl3BJTgLzJw3p0EqSs0U_300",
          name: "영 탁구 아카데미",
          description: "탁구치면서 다이어트해보세요",
          address1: "송파구",
          address2: "백제고분로",
          grade: 2.5
        },
        {
          category: "뷰티",
          image: "https://s3-ap-northeast-2.amazonaws.com/tlx.production/5R61n62aU3j53vNFjWv5lySEjPedJS6k9dn2ZqNCX4KTJi7CLWqata5F4tiDyz8I_300",
          name: "이든스애플",
          description: "신촌역 1번 뷰티 센터",
          address1: "마포구",
          address2: "신촌로",
          grade: 3
        },
        {
          category: "필라테스",
          image: "https://s3-ap-northeast-2.amazonaws.com/tlx.production/HsB3ayyy4H8s1AzDTOoTOEHrtga2CjFrWc2RXEu5hd2np0xpp5uL6sYr6MGyc2i4_300",
          name: "리햅필라테스",
          description: "필라테스로 아름다운 몸매를 가꾸세요",
          address1: "서대문구",
          address2: "수색로",
          grade: 1.5
        }
      ]
    }
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