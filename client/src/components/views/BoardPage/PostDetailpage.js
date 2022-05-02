import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { List, Typography, Button } from 'antd'
import moment from 'moment';
import './BoardPage.css'

const { Title } = Typography;



function Postdetailpage(props) {
    
    const postId = props.match.params.postId
    const variable = { postId: postId }
    
    const [PostDetail, setPostDetail] = useState([])

    useEffect(() => {
      Axios.post('/api/users/getPostDetail', variable)
      .then(response => {
          if(response.data.success) {
            setPostDetail(response.data.postDetail)
          } else {
              alert('게시글 정보 가져오지 못했습니다.')
          }
        })
    }, [])
    console.log(PostDetail) 
    
    if(PostDetail.writer) {
        if(PostDetail.filePath){
            return (
                        <div style={{ width: '100%', margin: '3rem 4rem' }}>
                            <Title level={2}>{PostDetail.title}</Title>
                            <List.Item>
                                <List.Item.Meta 
                                    title={PostDetail.writer.name}
                                    description={moment(PostDetail.updatedAt).calendar('')}
                                />
                            </List.Item>
                            
                            <hr />
                            <img style={{ width: '50%' }} src={`http://localhost:5000/${PostDetail.filePath}`} />
                            <p style={{ fontSize: '2.3rem' }}>
                                {PostDetail.description}
                            </p>
                            <Button type="primary" size="large" href="/board" style={{left: '50%'}}>목록</Button>
                        
                        </div>
                    )
        } else {
            return (
                <div style={{ width: '100%', margin: '3rem 4rem' }}>
                    <Title level={2}>{PostDetail.title}</Title>
                    <List.Item>
                        <List.Item.Meta 
                            title={PostDetail.writer.name}
                            description={moment(PostDetail.updatedAt).calendar('')}
                        />
                    </List.Item>
                    
                    <hr />
                   
                    <p style={{ fontSize: '2.3rem' }}>
                        {PostDetail.description}
                    </p>
                    <Button type="primary" size="large" href="/board" style={{left: '50%'}}>목록</Button>
                
                </div>
            )
        }
        
    } else {
        return (
            <div>...loading </div>
        )
    }
   
}

export default Postdetailpage
