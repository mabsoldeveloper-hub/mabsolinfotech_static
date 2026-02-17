import { Col, Row } from 'antd'
import React from 'react'

const OurUsp = () => {
  return (
    <div className='py-10'>
      <Row className='lg:px-60'>
        <Col span={12}>
          <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-bold underline'>
              Our USP
            </h1>
          </div>
        </Col>
        <Col span={12}>
          <div className='flex justify-start items-center gap-10'>
            <div>
              <p>
                5,000
              </p>
              <p>
                Smiling Clients
              </p>
            </div>
            <div>
              <p>
                5,000
              </p>
              <p>
                Smiling Clients
              </p>
            </div>
            <div>
              <p>
                5,000
              </p>
              <p>
                Smiling Clients
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default OurUsp