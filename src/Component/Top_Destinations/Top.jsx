import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Titel from '../Titel/Titel';
import Top1 from '../../assets/Top/top1.jpg'
import Top2 from '../../assets/Top/top2.jpg'
import Top3 from '../../assets/Top/top3.jpg'




const Top = ({  }) => {

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <div>
                            <Titel />
                        </div>



                        <div className="col-4 position-relative ">
                            <div>
                               <div className='hover-img-top'>
                               <img src={Top1} alt="" />
                               </div>
                                <div>
                                    <div className='position-absolute top-50 end-50 d-flex  justify-content-center  align-items-center item-i rounded-circle text-white '>

                                        <i class="bi bi-plus fs-2"></i>
                                    </div>
                                </div>

                                <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column me-auto text-white">
                                            <h3 className="">Noriva</h3>
                                            <span className='mb-3 '>176 tours</span>
                                        </div>
                                        <span className="circle-icon circle-icon-link bg-success item-rounded d-flex justify-content-center  align-items-center  text-white  p-3  rounded-circle">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 position-relative">
                            <div className='hover-img-top'>
                                <img src={
                                    Top2
                                } alt="" />
                            </div>
                            <div>
                                <div className='position-absolute top-50 end-50 d-flex  justify-content-center  align-items-center item-i rounded-circle text-white '>

                                    <i class="bi bi-plus fs-2"></i>
                                </div>
                            </div>
                            <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-column me-auto text-white">
                                        <h3 className="mb-0">Kardal</h3>
                                        <span className='mb-3'>127 tours</span>
                                    </div>
                                    <span className="circle-icon circle-icon-link bg-success item-rounded d-flex justify-content-center  align-items-center  text-white  p-3  rounded-circle">
                                        <i className="bi bi-geo-alt"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 position-relative">
                            <div  className='hover-img-top'>
                                <img src={
                                    Top3
                                } alt="" />
                            </div>
                            <div>
                                <div className='position-absolute top-50 end-50 d-flex  justify-content-center  align-items-center item-i rounded-circle text-white '>

                                    <i class="bi bi-plus fs-2"></i>
                                </div>
                            </div>
                            <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-column me-auto text-white">
                                        <h3 className="mb-0">Leront</h3>
                                        <span className='mb-3'>210
                                            tours</span>
                                    </div>
                                    <span className="circle-icon circle-icon-link bg-success item-rounded d-flex justify-content-center  align-items-center  text-white  p-3  rounded-circle">
                                        <i className="bi bi-geo-alt"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Top
