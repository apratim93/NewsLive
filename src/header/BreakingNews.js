import React from 'react';
import '../App.css'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
const currDate=new Date().toLocaleDateString()
const currTime=new Date().toLocaleTimeString()

const BreakingNews = ({item}) => {
   
  return (
    <>
    <div className="date">
  <p>Current Date is {currDate}</p>
  <p>Current Time is {currTime}</p>
  </div>

    <MDBRow>
      <MDBCol md='7'>
        <MDBCard className="card-img-top">
         
          <MDBCardImage
            top
            src={item.urlToImage}
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
        
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <a href={item.url} className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='white-text' />
            </a>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              {item.description}&apos;s content.
            </MDBCardText>
            <a href={item.url} className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  )
}
export default BreakingNews;