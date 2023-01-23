import React from 'react'
import "./ReportPdf.scss"

function Reportproject(props) {
    console.log(props)
    let details = props.location.state;
    React.useEffect(()=>{
        setTimeout(() => {
            window.print();            
        }, 1000);
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
        <div class="row">
    <div class="col-8">
        {/* Frist Section Start Here */}
        <section className="report-number-parent">
            <div className="report-number-child row m-auto align-items-center ">
                <div className="col-7 value ">
                    <p>{details.reportNumber}</p>
                </div>
                <div className="col-5 key ">
                    <p>
                     تقرير رقم
                    </p>
                </div>
            </div>

            <div className="report-number-child row m-auto align-items-center ">
                <div className="col-7 value">
                    <p>{details.workOrder}</p>
                </div>
                <div className="col-5 key">
                    <p className='tashgili'>  الرقم التشغيلي</p>
                </div>
            </div>

            <div className="report-number-child row m-auto align-items-center">
                <div className="col-7 value">
                    <p>{details.mainDate}</p>
                </div>
                <div className="col-5 key">
                    <p>
                    تاريخ الردود
                    </p>
                </div>
            </div>
        </section>
    </div>
    <div class="col-4">
        {/* Second Section Start Here / */}
        <section className="container-second second-col">
        <div className="row m-auto justify-content-end">
                <div className="mr-2">
                    <p className="bold-text"><span> {details.ownerName}</span> </p>
                </div>
                <div>
                    <p className="bold-text"><span> //السيد</span> </p>
                </div>
            </div>
            {/* <p className="bold-text"><span>{details.ownerName}</span> //السيد</p> */}
            
        
        </section>
    </div>
        </div>
        <section className="third container-second">
        <div className="row m-auto justify-content-end">
        <p>
                 <span className="">بفحص العينات الواردة الى معمل مستشفى ذرب للهجن بتاريخ</span>
                 <span className="bold-text mx-2">{details.mainDate}</span>
                 <span className="">و بياناتها كالتالى</span>
             </p>
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
        <h1>نتائج الفحص</h1>
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

        <h2 style={{textAlign:"center"}}>تفاصيل الاختبار</h2>

        {details.negative.length>0&&<>
        <h3 className="right">NEGATIVE: السلبى</h3>
        <table className="ui celled table dark-border">
        <thead >
            <tr><th className="dark-border" >م</th>
            <th className="dark-border" >رقم الرقبة</th>
            <th className="dark-border" >رقم المالك</th>
            <th className="dark-border" >رقم الشريحة</th>
            <th className="dark-border" >اسم الفحل</th>
            {details.negative[0].bapat.length>0&&<th className="dark-border">BAPAT</th>}
             {details.negative[0].bct.length>0&&<th className="dark-border">BCT</th>}
             {details.negative[0].celisa.length>0&&<th className="dark-border">cElisa</th>}
            <th className="dark-border" >النتيجة</th>
        </tr></thead>
        <tbody>
        {
         details.negative.map((item,index)=><tr >
         <td className="dark-border"  data-label="Name">{index+1}</td>
         <td className="dark-border"  data-label="Job">{item.neck}</td>
         <td className="dark-border" >{item.rakumalmalik}</td>
         <td className="dark-border"  data-label="Age">{item.microchip}</td>
         <td className="dark-border"  data-label="Job">{item.bullname}</td>
         {details.negative[0].bapat.length>0&&<td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>}
          {details.negative[0].bct.length>0&&<td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>}
          {details.negative[0].celisa.length>0&&<td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>}
         <td className="dark-border"  data-label="Job">{item.judgement.toUpperCase()}</td>
         </tr>)   
        }
        </tbody>
        </table>
        </>}

        {details.positive.length>0&&<>
        <h3 className="right">POSITIVE: الايجابى</h3>
        <table className="ui celled table dark-border">
        <thead>
            <tr><th className="dark-border">م</th>
            <th className="dark-border">رقم الرقبة</th>
            <th className="dark-border">رقم المالك</th>
            <th className="dark-border">رقم الشريحة</th>
            <th className="dark-border">اسم الفحل</th>
            {details.positive[0].bapat.length>0&&<th className="dark-border">BAPAT</th>}
             {details.positive[0].bct.length>0&&<th className="dark-border">BCT</th>}
             {details.positive[0].celisa.length>0&&<th className="dark-border">cElisa</th>}
            <th className="dark-border">النتيجة</th>
        </tr></thead>
        <tbody>
        {
         details.positive.map((item,index)=><tr>
         <td className="dark-border"  data-label="Name">{index+1}</td>
         <td className="dark-border"  data-label="Job">{item.neck}</td>
         <td className="dark-border" >{item.rakumalmalik}</td>
         <td className="dark-border"  data-label="Age">{item.microchip}</td>
         <td className="dark-border"  data-label="Job">{item.bullname}</td>
         {details.positive[0].bapat.length>0&&<td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>}
          {details.positive[0].bct.length>0&&<td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>}
          {details.positive[0].celisa.length>0&&<td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>}
         <td className="dark-border"  data-label="Job">{item.judgement.toUpperCase()}</td>
         </tr>)   
        }
        </tbody>
        </table>
        </>}


        {details.suspect.length>0&&<>
        <h3 className="right">SUSPECT: المشتبه</h3>
        <table className="ui celled table dark-border">
        <thead>
            <tr><th className="dark-border">م</th>
            <th className="dark-border">رقم الرقبة</th>
            <th className="dark-border">رقم المالك</th>
            <th className="dark-border">رقم الشريحة</th>
            <th className="dark-border">اسم الفحل</th>
            {details.suspect[0].bapat.length>0&&<th className="dark-border">BAPAT</th>}
             {details.suspect[0].bct.length>0&&<th className="dark-border">BCT</th>}
             {details.suspect[0].celisa.length>0&&<th className="dark-border">cElisa</th>}
            <th className="dark-border">النتيجة</th>
        </tr></thead>
        <tbody>
        {
         details.suspect.map((item,index)=><tr>
         <td className="dark-border"  data-label="Name">{index+1}</td>
         <td className="dark-border"  data-label="Job">{item.neck}</td>
         <td className="dark-border">{item.rakumalmalik}</td>
         <td className="dark-border"  data-label="Age">{item.microchip}</td>
         <td className="dark-border"  data-label="Job">{item.bullname}</td>
         {details.suspect[0].bapat.length>0&&<td className="dark-border" data-label="Job">{item.bapat.toUpperCase()}</td>}
          {details.suspect[0].bct.length>0&&<td className="dark-border" data-label="Job">{item.bct.toUpperCase()}</td>}
          {details.suspect[0].celisa.length>0&&<td className="dark-border" data-label="Job">{item.celisa.toUpperCase()}</td>}
         <td className="dark-border"  data-label="Job">{item.judgement.toUpperCase()}</td>
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
                <span className="mx-3 mainDate"> : {details.mainDate}</span>
                <span > بواسطة</span>
                <span className='bewasati'></span>
                <span className='Mudir'>مدير المختبر</span>
                
            </p>
         </section>
    </div>
  )
}

export default Reportproject;