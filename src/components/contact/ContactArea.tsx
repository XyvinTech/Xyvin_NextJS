"use client";

import React from "react";

const ContactArea = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_contact_ms">
            <div className="cs_contact">
              <div className="cs_contact_text">
                <p className="cs_contact_subtitle anim_text_upanddowns">
                  Contact Us
                </p>
                <h1 className="cs_contact_title anim_text_writting">
                  Get in Touch
                </h1>
              </div>
              {/* <div className="cs_height_80 cs_height_lg_20"></div> */}
              <div className="cs_from anim_div_ShowDowns">
                <p className="cs_contact_subtitle anim_text_upanddowns">
                  Xyvin Technologies Pvt Ltd offers innovative tech solutions,
                  specializing in Al, cloud computing, and software development
                  for startups and enterprises. With a focus on agility and
                  staying ahead of the curve, we ensure businesses thrive in the
                  digital landscape.
                </p>
                <div className="row py-4">
                  <div className="col-md-6">
                    <div className="cs_icon">
                      <a
                        href="https://www.google.com/maps"
                        className="cs_icon_style"
                      >
                        <i>
                          <svg
                            width="14"
                            height="19"
                            viewBox="0 0 14 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 0.0195312C3.14027 0.0195312 0 3.01027 0 6.68621C0 7.78973 0.289693 8.88387 0.840408 9.85434L6.6172 17.8047C6.69411 17.9373 6.84065 18.0195 7 18.0195C7.15935 18.0195 7.30589 17.9373 7.3828 17.8047L13.1617
                              9.85105C13.7103 8.88387 14 7.78969 14 6.68617C14 3.01027 10.8597 0.0195312 7 0.0195312ZM7 10.0195C5.07014 10.0195 3.50002 8.52418 3.50002 6.68621C3.50002 4.84824 5.07014 3.35289 7 3.35289C8.92986 3.35289 10.5 4.84824 10.5 6.68621C10.5
                              8.52418 8.92986 10.0195 7 10.0195Z"
                              fill="white"
                            ></path>
                          </svg>
                        </i>
                      </a>
                      <div className="cs_icon_text">
                        <h6 className="cs_icon_title">Address</h6>
                        <p className="cs_icon_subtitle">
                        Xyvin Technologies Private Limited, dewSpace Business Center, Ernakulam North, Kochi, 
India - 682018
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_icon">
                      <a href="tel:+91 8138916303" className="cs_icon_style">
                        <i>
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.6837 11.9266C13.0957 11.3461 12.3616 11.3461 11.7773 11.9266C11.3316 12.3686 10.8859 12.8105 10.4477 13.26C10.3278 13.3836 10.2267 13.4098 10.0806 13.3274C9.79225 13.1701 9.48513 13.0427 9.20797 12.8704C7.91581 12.0577 6.8334 11.0127 5.87458 9.83668C5.39891 9.2524 4.97568 8.62692 4.6798 7.92279C4.61987 7.78046 4.63111 7.68683 4.74721 7.57072C5.19292 7.14 5.62738 6.69805 6.06559 6.25609C6.67609 5.64185 6.67609 4.92273 6.06185 4.30474C5.71353 3.95268 5.3652 3.6081 5.01688 3.25604C4.65733 2.89648 4.30151 2.53318 3.93821 2.17736C3.35018 1.60432 2.61609 1.60432 2.03181 2.18111C1.58236 2.62306 1.15164 3.07626 0.694705 3.51072C0.271476 3.91148 0.0579884 4.40212 0.0130438 4.97517C-0.0581186 5.90777 0.17035 6.78794 0.492454 7.64563C1.15164 9.42095 2.15541 10.9978 3.37266 12.4435C5.01688 14.3986 6.97947 15.9454 9.27539 17.0615C10.3091 17.5634 11.3803 17.9492 12.5451 18.0129C13.3466 18.0578 14.0433 17.8556 14.6013 17.2301C14.9834 16.8031 15.4141 16.4136 15.8186 16.0053C16.4178 15.3986 16.4216 14.6645 15.8261 14.0652C15.1145 13.3499 14.3991 12.6382 13.6837 11.9266Z"
                              fill="white"
                            ></path>
                            <path
                              d="M12.9672 8.93825L14.3493 8.70229C14.132 7.4326 13.5328 6.28277 12.6227 5.36889C11.6601 4.40633 10.4428 3.79957 9.10199 3.6123L8.90723 5.00184C9.9447 5.14791 10.8885 5.61609 11.6339 6.36142C12.338 7.06555 12.7987 7.95696 12.9672 8.93825Z"
                              fill="white"
                            ></path>
                            <path
                              d="M15.1294 2.93344C13.5338 1.33791 11.5151 0.330398 9.28656 0.0195312L9.0918 1.40907C11.0169 1.67874 12.7623 2.55141 14.1406 3.92597C15.4477 5.23311 16.3054 6.88483 16.6163 8.70134L17.9983 8.46538C17.635 6.36047 16.6425 4.45033 15.1294 2.93344Z"
                              fill="white"
                            ></path>
                          </svg>
                        </i>
                      </a>
                      <div className="cs_icon_text">
                        <h6 className="cs_icon_title">Phone</h6>
                        <p className="cs_icon_subtitle">+91  813 891 6303</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_icon">
                      <a
                        href="mailto:info@xyvin.com"
                        className="cs_icon_style"
                      >
                        <i>
                          <svg
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.5043 8.78757C10.0565 9.08612 9.53631 9.24394 9 9.24394C8.46373 9.24394 7.94356 9.08612 7.49574 8.78757L0.119848 3.87016C0.0789258 3.84288 0.0390586 3.81444 0 3.78519V11.8429C0 12.7667 0.749707 13.4999 1.65702 13.4999H16.3429C17.2668 13.4999 18 12.7502 18 11.8429V3.78516C17.9608 3.81448 17.9209 3.84299 17.8799 3.87031L10.5043 8.78757Z"
                              fill="white"
                            ></path>
                            <path
                              d="M0.704883 2.99347L8.08077 7.91091C8.35998 8.09707 8.67997 8.19012 8.99996 8.19012C9.31999 8.19012 9.64002 8.09703 9.91923 7.91091L17.2951 2.99347C17.7365 2.69939 18 2.2072 18 1.67599C18 0.762594 17.2569 0.0195312 16.3435 0.0195312H1.65646C0.743098 0.0195664 0 0.762629 0 1.67687C0 2.2072 0.263531 2.69939 0.704883 2.99347Z"
                              fill="white"
                            ></path>
                          </svg>
                        </i>
                      </a>
                      <div className="cs_icon_text">
                        <h6 className="cs_icon_title">Email</h6>
                        <p className="cs_icon_subtitle">contact@xyvin.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cs_icon">
                      <a
                        href="tel:+916282822971"
                        className="cs_icon_style"
                      >
                        <i>
                          <svg
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="0.958984"
                              width="35.7"
                              height="35.7"
                              rx="17.85"
                              fill="black"
                            />
                            <path
                              d="M23.0989 14.003C22.3588 13.2592 21.4772 12.6694 20.5056 12.2681C19.534 11.8667 18.4918 11.6619 17.4398 11.6656C13.032 11.6656 9.43958 15.24 9.43958 19.6258C9.43958 21.0314 9.81093 22.397 10.5052 23.6018L9.375 27.7305L13.6133 26.622C14.7838 27.2566 16.0997 27.594 17.4398 27.594C21.8476 27.594 25.44 24.0195 25.44 19.6338C25.44 17.5052 24.6085 15.5051 23.0989 14.003ZM17.4398 26.2445C16.245 26.2445 15.0744 25.9232 14.0492 25.3208L13.807 25.1762L11.2883 25.8349L11.9583 23.393L11.7969 23.144C11.1331 22.0893 10.7806 20.8702 10.7797 19.6258C10.7797 15.979 13.7666 13.007 17.4317 13.007C19.2077 13.007 20.8788 13.6978 22.1301 14.9509C22.7497 15.5645 23.2407 16.2944 23.5747 17.0983C23.9087 17.9021 24.0789 18.764 24.0757 19.6338C24.0918 23.2805 21.1049 26.2445 17.4398 26.2445ZM21.0887 21.2965C20.8869 21.2001 19.902 20.7182 19.7244 20.6459C19.5387 20.5816 19.4096 20.5495 19.2723 20.7423C19.1351 20.9431 18.7557 21.3929 18.6426 21.5214C18.5296 21.658 18.4085 21.674 18.2067 21.5696C18.0049 21.4732 17.3591 21.2564 16.6002 20.5816C16.0028 20.0515 15.6073 19.4009 15.4862 19.2C15.3731 18.9992 15.47 18.8948 15.575 18.7904C15.6638 18.702 15.7768 18.5574 15.8737 18.445C15.9705 18.3325 16.0109 18.2442 16.0755 18.1157C16.1401 17.9791 16.1078 17.8666 16.0593 17.7703C16.0109 17.6739 15.6073 16.6939 15.4458 16.2923C15.2843 15.9067 15.1148 15.9549 14.9937 15.9469H14.6062C14.469 15.9469 14.2591 15.9951 14.0734 16.1959C13.8958 16.3967 13.3791 16.8787 13.3791 17.8586C13.3791 18.8386 14.0976 19.7864 14.1945 19.9149C14.2914 20.0515 15.6073 22.0596 17.6093 22.9191C18.0856 23.1279 18.457 23.2484 18.7476 23.3368C19.2239 23.4894 19.6598 23.4653 20.007 23.4171C20.3945 23.3609 21.1937 22.9351 21.3551 22.4693C21.5247 22.0034 21.5247 21.6098 21.4682 21.5214C21.4116 21.4331 21.2905 21.3929 21.0887 21.2965Z"
                              fill="white"
                            />
                          </svg>
                        </i>
                      </a>
                      <div className="cs_icon_text">
                        <h6 className="cs_icon_title">Whatsapp</h6>
                        <p className="cs_icon_subtitle">+91  813 891 6303</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <form onClick={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test1"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test1" className="cs_input_label">
                        Name
                      </label>
                    </div>
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test2"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test2" className="cs_input_label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="cs_height_10 cs_height_lg_20"></div>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test3"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test3" className="cs_input_label">
                        Phone
                      </label>
                    </div>
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        id="test4"
                        placeholder="Name"
                        name="test"
                      />
                      <label htmlFor="test4" className="cs_input_label">
                        Subject
                      </label>
                    </div>
                  </div>
                  <div className="cs_height_100 cs_height_lg_60"></div>
                  <div className="cs_field_group">
                    <input
                      className="cs_input_field"
                      type="text"
                      id="test5"
                      placeholder="Message"
                      name="test"
                    />
                    <label htmlFor="test5" className="cs_input_label">
                      Message
                    </label>
                  </div>
                  <div className="cs_height_60 cs_height_lg_60"></div>
                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_type_btn"
                  >
                    <span>Send Now</span>
                    <svg
                      width="19"
                      height="13"
                      viewBox="0 0 19 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </form> */}
              </div>
            </div>
            <div className="cs_contact_section_2 anim_div_ShowRightSide">
              <div
                className="cs_google_map cs_bg"
                data-src="assets/img/map_img.png"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.1365688917185!2d76.31053664151985!3d10.011218525890056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa61914d7e8b597b9%3A0xf409a763ef2bafc8!2sAcute%20Endeavors%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717833369050!5m2!1sen!2sin"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ContactArea;
