// import React from 'react'
// import "./ReportPdf.scss"

// function ReportPdf(props) {
//     console.log(props)
//     let details = props.location.state;
//     React.useEffect(()=>{
//         //window.print();
//     },[])
//   return (
//     <div className="p-5 report-pdf">
//         <div className='row m-auto'>
//             <div className="col-4" style={{textAlign:"left"}} onClick={()=>props.history.push("/")}>
//                 <img src="/tharblogo2.png" alt="tharb" />
//             </div>
//             <div className="col-4" style={{textAlign:"center"}}>
//                 <h2>تقرير فحص عينات</h2>
//             </div>
//             <div className="col-4" style={{textAlign:"right"}}>
//                 <h4>معمل مستشفى ذرب للهجن</h4>
//             </div>
//         </div>

//         <div className="row mt-4 border-head">
//             <div className="col-2">
//                 {details.reportNumber}
//             </div>
//             <div className="col-1">
//             تقرير رقم
//             </div>
//         </div>
//         <div className="row my-auto border-head">
//             <div className="col-2">
//             {details.workOrderDate}
//             </div>
//             <div className="col-1">
//             الرقم التشغيلي
//             </div>
//         </div>
//         <div className="row my-auto border-head">
//             <div className="col-2">
//              {details.mainDate}
//             </div>
//             <div className="col-1">
//              تاريخ الردود
//             </div>
//         </div>

//         <div style={{textAlign:"right"}} className="right-text">
//             <p> {details.ownerName} //السيد</p>
//             <p>
//                 <span>بفحص العينات الواردة الى معمل مستشفى ذرب للهجن بتاريخ</span>
//                 <span>{details.date}</span>
//                 <span>و بياناتها كالتالى</span>
//             </p>
//             <p>نوع العينات :دم</p>
//             <p><span className="mr-1"><b>{details.sampleQuantity}</b></span>:عدد العينات</p>
//             <p>الفحص المطلوب : الكشف عن اجسام مناعية للبروسيلا</p>
//             <p>جهة الفحص :الميكروبيولوجي</p>
//         </div>


//         <div className="center-div">
//             <h1>نتائج الفحصر</h1>
//             <div className="row m-auto table-head">
//                 <div className="col-3 table-child">
//                     <h3>العدد الاجمالى</h3>
//                     <hr />
//                     <p>{details.negative.length}</p>
//                 </div>
//                 <div className="col-3 table-child">
//                     <h3>العدد الاجمالى</h3>
//                     <hr />
//                     <p>{details.suspect.length}</p>
//                 </div>
//                 <div className="col-3 table-child">
//                     <h3>العدد الاجمالى</h3>
//                     <hr />
//                     <p>{details.positive.length}</p>
//                 </div>
//                 <div className="col-3 table-child">
//                     <h3>العدد الاجمالى</h3>
//                     <hr />
//                     <p>{details.negative.length+details.suspect.length+details.positive.length}</p>
//                 </div>
//             </div>
//         </div>

//         <h2 style={{textAlign:"center"}}>تفاصيل الاختبار</h2>

//         {details.negative.length>0&&<>
//         <h3 className="right">NEGATIVE: السلبى</h3>
//         <table className="ui celled table dark-border">
//         <thead>
//             <tr><th className="dark-border">S.N</th>
//             <th className="dark-border">Microchip</th>
//             <th className="dark-border">Neck</th>
//             <th className="dark-border">Name</th>
//             <th className="dark-border">BAPAT</th>
//             <th className="dark-border">BCT</th>
//             <th className="dark-border">cElisa</th>
//             <th className="dark-border">JUDGEMENT</th>
//         </tr></thead>
//         <tbody>
//         {
//          details.negative.map((item,index)=><tr>
//          <td className="dark-border" data-label="Name">{index+1}</td>
//          <td className="dark-border" data-label="Age">{item.microchip}</td>
//          <td className="dark-border" data-label="Job">{item.neck}</td>
//          <td className="dark-border" data-label="Job"></td>
//          <td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.judgement.toUpperCase()}</td>
//          </tr>)   
//         }
//         </tbody>
//         </table>
//         </>}

//         {details.positive.length>0&&<>
//         <h3 className="right">POSITIVE: الايجابى</h3>
//         <table className="ui celled table dark-border">
//         <thead>
//             <tr><th className="dark-border">S.N</th>
//             <th className="dark-border">Microchip</th>
//             <th className="dark-border">Neck</th>
//             <th className="dark-border">Name</th>
//             <th className="dark-border">BAPAT</th>
//             <th className="dark-border">BCT</th>
//             <th className="dark-border">cElisa</th>
//             <th className="dark-border">JUDGEMENT</th>
//         </tr></thead>
//         <tbody>
//         {
//          details.positive.map((item,index)=><tr>
//          <td className="dark-border" data-label="Name">{index+1}</td>
//          <td className="dark-border" data-label="Age">{item.microchip}</td>
//          <td className="dark-border" data-label="Job">{item.neck}</td>
//          <td className="dark-border" data-label="Job"></td>
//          <td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.judgement.toUpperCase()}</td>
//          </tr>)   
//         }
//         </tbody>
//         </table>
//         </>}


//         {details.suspect.length>0&&<>
//         <h3 className="right">SUSPECT: المشتبه</h3>
//         <table className="ui celled table dark-border">
//         <thead>
//             <tr><th className="dark-border">S.N</th>
//             <th className="dark-border">Microchip</th>
//             <th className="dark-border">Neck</th>
//             <th className="dark-border">Name</th>
//             <th className="dark-border">BAPAT</th>
//             <th className="dark-border">BCT</th>
//             <th className="dark-border">cElisa</th>
//             <th className="dark-border">JUDGEMENT</th>
//         </tr></thead>
//         <tbody>
//         {
//          details.suspect.map((item,index)=><tr>
//          <td className="dark-border" data-label="Name">{index+1}</td>
//          <td className="dark-border" data-label="Age">{item.microchip}</td>
//          <td className="dark-border" data-label="Job">{item.neck}</td>
//          <td className="dark-border" data-label="Job"></td>
//          <td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>
//          <td className="dark-border" data-label="Job">{item.judgement.toUpperCase()}</td>
//          </tr>)   
//         }
//         </tbody>
//         </table>
//         </>}

//         <div className="bottom-right-div">
//         <p>
//         طرق الاختبار 2016 له لد 0 ه 018
//         - إسناد القياس: إسناد القياس طبقا للنظام الدولى لوحدات القياس باستخدام المعايرات والمواد المرجعية
//         الظروف البينية: درجه الحراره22 +2درجه مئوية.
//         </p>
//         <h1>:ملاحظات</h1>
//         <h3>المدير الفنى</h3>
//         <p>- الفحوص المدونة خاصة بالعينات الواردة فقط وتم سحبها بمعرفة العميل و بياناتها علي مسئولية الجهة الراسلة للعينات
//         لن يتم أعاده إصدار هذا التقرير الاكاملا وبطلب مكتوب بواسطة العميل</p>
//         <p>-إي كشط ارتغيير في التقرير يعتبر لاغى واي صورة غير معتمدة من المعمل لا يعتد بها</p>
//         <div className="row m-auto justify-content-end">
//             <div className="col-3">
//                 <p>:تحريرا فى</p>
//             </div>
//             <div className="col-3">
//                 <p>:بواسطة</p>
//             </div>
//         </div>
//         </div>
    
//         <h3>مدير المعمل</h3>
//         <footer>
//             <div className="row mx-2 my-auto">
//                 <div className="col-4">
//                 net.tharb@hanaa.dr
//                 </div>
//                 <div className="col-4">
//                 تليفون: 77496289
//                 </div>
//                 <div className="col-4">
//                 شارع دخان – مخرج 66 -منطقة ذرب – الدوحة – قطر
//                 </div>
//             </div>
//             <div className="row mx-2 my-auto">
//                 <div className="col-4">
//                 1 عدد الصفحات: 1 من 
//                 </div>
//                 <div className="col-4">
//                 تاريخ الاصدار: 2018/02/01
//                 </div>
//                 <div className="col-4">
//                 الاصدار : 3
//                 </div>
//             </div>
//         </footer>
//     </div>
//   )
// }

// export default ReportPdf

import { DetailsTwoTone } from '@mui/icons-material';
import React from 'react'
import "./ReportPdf.scss"

function ReportPdf(props) {
    console.log(props)
    let details = props.location.state;
    React.useEffect(()=>{
        window.print();
    },[])
  return (
    <div className="report-pdf-2">
        <section className="row m-auto container-first align-items-center">
            <div className="col-4 cont-1">
            <img src="/tharblogowp.jpeg" alt="tharb" />
            </div>
            <div className="col-4 cont-2">
                <h2>تقرير فحص عينات</h2>
            </div>
            <div className="col-4 cont-3">
                <h3>مختبر مستشفى ذرب للهجن</h3>
            </div>
        </section>

        <section className="report-number-parent">
            <div className="report-number-child row m-auto align-items-center justify-content-around">
                <div className="col-6 value">
                    <p>{details.reportNumber}</p>
                </div>
                <div className="col-6 key">
                    <p>
                     تقرير رقم
                    </p>
                </div>
            </div>

            <div className="report-number-child row m-auto align-items-center justify-content-around">
                <div className="col-6 value">
                    <p>{details.workOrder}</p>
                </div>
                <div className="col-6 key">
                    <p>
                     الرقم التشغيلي
                    </p>
                </div>
            </div>

            <div className="report-number-child row m-auto align-items-center justify-content-around">
                <div className="col-6 value">
                    <p>{details.mainDate}</p>
                </div>
                <div className="col-6 key">
                    <p>
                    تاريخ الردود
                    </p>
                </div>
            </div>
        </section>

        <section className="container-second">
        <div className="row m-auto justify-content-end">
                <div className="mr-2">
                    <p className="bold-text">{details.ownerName}</p>
                </div>
                <div>
                    <p className="bold-text">//السيد</p>
                </div>
            </div>
            {/* <p className="bold-text"><span>{details.ownerName}</span> //السيد</p> */}
            <p>
                 <span className="">بفحص العينات الواردة الى معمل مستشفى ذرب للهجن بتاريخ</span>
                 <span className="bold-text mx-2">{details.mainDate}</span>
                 <span className="">و بياناتها كالتالى</span>
             </p>
             <div className="row m-auto justify-content-end">
                <div className="col-4 key">
                    <p>دم:</p>
                    <p className="bold-text">{details.sampleQuantity}:</p>
                    <p>الكشف عن اجسام مناعية للبروسيل:</p>
                    <p>الميكروبيولوجى:</p>
                </div>
                <div className="col-2 value">
                    <p className="bold-text">نوع العينات</p>
                    <p className="bold-text">عدد العینات</p>
                    <p className="bold-text">الفحص المطلوب</p>
                    <p className="bold-text">جهة الفحص</p>
                </div>
             </div>
        </section>

        <section className="container-fourth">
        <h1 className='myclass'>نتائج الفحص</h1>
        <div className="row mt-5 mx-auto justify-content-center">
            <div className="col-2 heading">              
                <h3>السلبى</h3>
            </div>
            <div className="col-2 heading">
                <h3>المشتبه</h3>
            </div>
            <div className="col-2 heading">
                <h3>الايجابى</h3>
            </div>
            <div className="col-2 heading">
                <h3>العدد الاجمالى</h3>
            </div>
        </div>
        <div className="row m-auto justify-content-center row2">
            <div className="col-2 heading-value">
                <h3>{details.negative.length}</h3>              
            </div>
            <div className="col-2 heading-value">
            <h3>{details.suspect.length}</h3>
            </div>
            <div className="col-2 heading-value">
            <h3>{details.positive.length}</h3>
            </div>
            <div className="col-2 heading-value">
            <h3>{details.negative.length+details.suspect.length+details.positive.length}</h3>
            </div>
        </div>
        </section>

        {/* <section className="container-fifth">
            <div className="row m-auto align-items-center justify-content-between">
                <div className="col-1 col-key">
                    <h3>SR.NO</h3>
                </div>
                <div className="col-1 col-key">
                    <h3>Microchip</h3>
                </div>
                <div className="col-1 col-key">
                    <h3>Neck</h3>
                </div>
                <div className="col-1 col-key">
                    <h3>Name</h3>
                </div>
                <div className="col-1 col-key">
                    <h3>BAPAT</h3>
                </div>
                <div className="col-1 col-key">
                    <h3>BCT</h3>
                </div>
                <div className="col-1 col-key">
                    <h3>cELISA</h3>
                </div>
                <div className="col-1 col-key">
                    <h3>Judgement</h3>
                </div>
            </div>
            {
                details.negative.map((item,index)=><div className="row m-auto align-items-center justify-content-between">
          <div className="col-1 col-value">{index+1}</div>
          <div className="col-1 col-value">{item.microchip}</div>
          <div className="col-1 col-value">{item.neck}</div>
          <div className="col-1 col-value"></div>
          <div className="col-1 col-value">{item.bapat.toUpperCase()}</div>
          <div className="col-1 col-value">{item.bct.toUpperCase()}</div>
          <div className="col-1 col-value">{item.celisa.toUpperCase()}</div>
          <div className="col-1 col-value">{item.judgement.toUpperCase()}</div>
                </div>)
            }
        </section> */}
       {details.negative.length>0&&<>
         <h3 className="right">NEGATIVE: السلبى</h3>
         <table className="ui celled table dark-border">
         <thead>
             <tr><th className="dark-border">S.N</th>
             <th className="dark-border">Microchip</th>
             <th className="dark-border">Neck</th>
             <th className="dark-border">Name</th>
             {details.negative[0].bapat.length>0&&<th className="dark-border">BAPAT</th>}
             {details.negative[0].bct.length>0&&<th className="dark-border">BCT</th>}
             {details.negative[0].celisa.length>0&&<th className="dark-border">cElisa</th>}
             <th className="dark-border">JUDGEMENT</th>
         </tr></thead>
         <tbody>
         {
          details.negative.map((item,index)=><tr>
          <td className="dark-border" data-label="Name">{index+1}</td>
          <td className="dark-border" data-label="Age">{item.microchip}</td>
          <td className="dark-border" data-label="Job">{item.neck}</td>
          <td className="dark-border" data-label="Job"></td>
          {details.negative[0].bapat.length>0&&<td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>}
          {details.negative[0].bct.length>0&&<td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>}
          {details.negative[0].celisa.length>0&&<td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>}
          <td className="dark-border" data-label="Job">{item.judgement.toUpperCase()}</td>
          </tr>)   
         }
         </tbody>
         </table>
         </>}

         {details.positive.length>0&&<>
         <h3 className="right">POSITIVE: المشتبه</h3>
         <table className="ui celled table dark-border">
         <thead>
             <tr><th className="dark-border">S.N</th>
             <th className="dark-border">Microchip</th>
             <th className="dark-border">Neck</th>
             <th className="dark-border">Name</th>
             {details.positive[0].bapat.length>0&&<th className="dark-border">BAPAT</th>}
             {details.positive[0].bct.length>0&&<th className="dark-border">BCT</th>}
             {details.positive[0].celisa.length>0&&<th className="dark-border">cElisa</th>}
             <th className="dark-border">JUDGEMENT</th>
         </tr></thead>
         <tbody>
         {
          details.positive.map((item,index)=><tr>
          <td className="dark-border" data-label="Name">{index+1}</td>
          <td className="dark-border" data-label="Age">{item.microchip}</td>
          <td className="dark-border" data-label="Job">{item.neck}</td>
          <td className="dark-border" data-label="Job"></td>
          {details.positive[0].bapat.length>0&&<td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>}
          {details.positive[0].bct.length>0&&<td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>}
          {details.positive[0].celisa.length>0&&<td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>}
          <td className="dark-border" data-label="Job">{item.judgement.toUpperCase()}</td>
          </tr>)   
         }
         </tbody>
         </table>
         </>}


         {details.suspect.length>0&&<>
         <h3 className="right">SUSPECT: الايجابى</h3>
         <table className="ui celled table dark-border">
         <thead>
             <tr><th className="dark-border">S.N</th>
             <th className="dark-border">Microchip</th>
             <th className="dark-border">Neck</th>
             <th className="dark-border">Name</th>
             {details.suspect[0].bapat.length>0&&<th className="dark-border">BAPAT</th>}
             {details.suspect[0].bct.length>0&&<th className="dark-border">BCT</th>}
             {details.suspect[0].celisa.length>0&&<th className="dark-border">cElisa</th>}
             <th className="dark-border">JUDGEMENT</th>
         </tr></thead>
         <tbody>
         {
          details.suspect.map((item,index)=><tr>
          <td className="dark-border" data-label="Name">{index+1}</td>
          <td className="dark-border" data-label="Age">{item.microchip}</td>
          <td className="dark-border" data-label="Job">{item.neck}</td>
          <td className="dark-border" data-label="Job"></td>
          {details.suspect[0].bapat.length>0&&<td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>}
          {details.suspect[0].bct.length>0&&<td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>}
          {details.suspect[0].celisa.length>0&&<td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>}
          <td className="dark-border" data-label="Job">{item.judgement.toUpperCase()}</td>
          </tr>)   
         }
         </tbody>
         </table>
         </>}

         <section className="container-sixth">
            <p>OIE manual of terrestrial animals 2016 طرق الاختبار -</p>
            <p>­ إسناد القیاس: إسناد القیاس طبقا للنظام الدولي لوحدات القیاس باستخدام المعایرات والمواد المرجعیة
            </p>
            <p>الظروف البیئیة: درجه الحراره22± 2درجه مئویة -</p>
            <div className="large-cont">
                <h2>:ملاحظات</h2>
            </div>
            <h3>المدير الفنى</h3>
            <p> الفحوص المدونة خاصة بالعينات الواردة فقط وتم سحبها بمعرفة العميل و بياناتها علي مسئولية الجهة الراسلة للعينات -</p>
            <p>لن يتم أعاده إصدار ھذا التقرير الاكاملا وبطلب مكتوب بواسطة العميل -</p>
            <p>إي كشط اوتغيير في التقرير يعتبر لاغي وأي صورة غير معتمدة من المعمل لا يعتد بها -</p>
            <p>
            <span>تحریرا في</span>
                <span className="mx-3"> : {details.mainDate}</span>
                <span > بواسطة</span>
                <span className='bewasati'></span>
                <span className='Mudir'>مدير المختبر</span>
            </p>
         </section>


    </div>
  )
}

export default ReportPdf
// import React from 'react';
// import { Page, Text, View, Document, StyleSheet,Font } from '@react-pdf/renderer';
// import { PDFViewer } from '@react-pdf/renderer';
// import IBMRegular from  "./IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf"

// // Create styles
// const styles = StyleSheet.create({
//   arabi:{
//     fontFamily:"IBM Plex Sans Arabic"

//   },
//   page: {
//     padding:5
//   },
//   containerFirst:{
//     flexDirection:"row",
//     justifyContent:"space-between",
//   },
//   imghalf:{
//     //height:10,
//     width:10
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });
// Font.register({ family: 'IBM Plex Sans Arabic', src: IBMRegular });
// // Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.containerFirst}>
//         <View>
//             <Text style={styles.arabi}>تقرير فحص عينات</Text>
//         </View>
//         <View>
//             <Text style={styles.arabi}>مختبر مستشفى ذرب للهجن</Text>
//         </View>
//       </View>
//     </Page>
//   </Document>
// );




// function ReportPdf(props) {
//     console.log(props)
//     let details = props.location.state;
//     React.useEffect(()=>{
//         //window.print();
//     },[])
//   return (
//     <PDFViewer style={{height:"99vh",width:"100%"}}>
//     <MyDocument />
//   </PDFViewer>
//   )
// }

// export default ReportPdf