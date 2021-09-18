var router  = new Navigo(null, true, '#!');
const app = document.querySelector("#app");
router.on({
 "/": function(){
     app.innerHTML = `
     <div class="home">
     <div class="top_title">
     BRUR Cover Page Generator</div>
     <div class="avail">
     <a href="#!/asignment"><div class="cov-a"><div><i class="icofont-ebook"></i><br> Asignment Cover Page</div></div></a>
     <a href="#!/exam"><div class="cov-e"><div><i class="icofont-clip-board"></i><br>Exam Cover Page</div></div></a>
     </div>
     </div>
     </div>
     `
 },
 "/asignment": function(){
  app.innerHTML=`
  <form id="assignment_form">
  <div class="head"><i class="icofont-ebook"></i> Assignment Coverpage<head/div>
  <div class="input-field">
 <input type="text" name="name" required/> 
 <label for="name">Your Name</label>
  </div>

  <div class="input-field">
  <textarea type="text" name="aname" placeholder="Assignment on..." required></textarea> 
   </div>

   <div class="input-field">
   <input type="text" name="dept" required />
   <label for="name">Department</label>
</div>
<div class="input-field col s12">
   <select name="year" required>
       <option value="" disabled selected>Select Year</option>
       <option value="1st">1st</option>
       <option value="2nd">2nd</option>
       <option value="3rd">3rd</option>
       <option value="4th">4th</option>
   </select>
</div>

<div class="input-field col s12">
   <select name="semester" required>
       <option value="" disabled selected>Select Semester</option>
       <option value="1st">1st</option>
       <option value="2nd">2nd</option>
   </select>
</div>

<div class="input-field">
   <input type="text" name="id" required />
   <label for="id">ID No.</label>
</div>
<div class="input-field">
<input type="text" name="session" required/>
<label for="session">Session</label>
</div>

<div class="input-field">
<input type="text" name="code" required/>
<label for="code">Course Code</label>
</div>

<div class="input-field">
<input type="text" name="title" required/>
<label for="title">Course Title</label>
</div>

<div class="input-field">
<input type="text" name="tname" required>
<label for="tname">Teacher name</label>
</div>

<div class="input-field col s12">
   <select name="trank" required>
       <option value="" disabled selected>Select Teacher's Rank</option>
       <option value="Professor">Professor</option>
       <option value="Associate Professor">Associate Professor</option>
       <option value="Assistant Professor">Assistant Professor</option>
       <option value="Lecturer">Lecturer</option>
       <option value="Instructor">Instructor</option>
       <option value="Head of Department">Head of Department</option>
   </select>
</div>


<div class="input-field">
<input type="text" name="tdept" required>
<label for="tdept">Teacher's Department</label>
</div>

<div class="input-field">
<input class="datepicker" type="text" name="date" required/>
<label for="date">Submission Date</label>
</div>

<div class="input-field color">
Choose your favorite color:
<input type="color" id="colorpicker" name="color" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" value="#6494ed" required> 
</div>

<div class="input-field col s12">
   <select name="quality" required>
       <option value="" disabled selected>Select Pdf Quality</option>
       <option value="2">Default(>300KB)</option>
       <option value="5">Medium(>800KB)</option>
       <option value="10">High(>2MB)</option>
   </select>
</div>

<center><button type="submit" class="btn red"><i class="icofont-file-pdf"></i> Generate Coverpage</button></center>
   
  </form>


  <div class="assignment">
  <div class="abody">
  <div class="alogo"><img src="./logo.jpeg"/></div>
  <div class="auni">Begum Rokeya University, Rangpur</div>
      <div class="atitle1">Department of<br><span class="deptName d1"> Computer Science & Engineering</span></div>
    <div class="assignment_name">Electronic Theory of Valency and Chemical Bonding & something other that can over flow this div.</div>
    <div class="act">Course Code: <span class="acode">MAT2127</span><br>Course Title: <span class="atitle">Matrices & Diffrential Equation</span></div>
    <div class="table">
    <table border="0">
    <tr>
    <td class="atd1">
    <div class="box-title sfrom">Submitted From</div>
    <div class="a"><div class="at">Name:</div><div class="aname aa">Abu Nayim Faisal</div></div>
    <div class="a"><div class="at">ID:</div><div class="id aa">1805027</div></div>
    <div class="a"><div class="at">Year:</div><div class="ayear aa">2nd</div></div>
    <div class="a"><div class="at">Semester:</div><div class="asemester aa">1st</div></div>
    <div class="a"><div class="at">Session:</div><div class="Session aa">2018-2019</div></div>
    <div class="dof">Department of <span class="deptName">Computer Sicence & Engineering</span>,<br>Begum Rokeya University, Rangpur</div>
    </td>
    <td class="atd1">
    <div class="box-title sto">Submitted To</div>
    <div class="tname">AKM Kazi Sazzad Hussain</div>
    <div class="rank">Assistant professor</div>
    <div class="dof">Department of <span class="tdept">Mathematics</span>,<br>Begum Rokeya University, Rangpur</div>
       <option value="Instructor">Instructor</option>
       </td>
    </tr>
    </table>
    <div class="subdate">Submission Date: 20/12/2021</div>
    </div>
  </div>
  </div>
  `
  const sheet = document.querySelector('.assignment');
  const assignment = document.querySelector('#assignment_form');

  assignment.addEventListener('submit', e=>{
      $('.loader').show();
      e.preventDefault();
      $('.d1').css('color', assignment.color.value);
      $('.assignment_name').css('background', assignment.color.value);
      $('.deptName').text(assignment.dept.value);
      $('.assignment_name').text(assignment.aname.value);
      $('.acode').text(assignment.code.value);
      $('.atitle').text(assignment.title.value);
      $('.aname').text(assignment.name.value);
      $('.id').text(assignment.id.value);
      $('.ayear').text(assignment.year.value);
      $('.asemester').text(assignment.semester.value);
      $('.Session').text(assignment.session.value);
      $('.tname').text(assignment.tname.value);
      $('.rank').text(assignment.trank.value + ".");
      $('.tdept').text(assignment.tdept.value);
      $('.subdate').text('Submission Date: ' + assignment.date.value)
     let quality = parseInt(assignment.quality.value);
      setTimeout(function(){ $('.loader').hide();}, 5000);
            setTimeout(function(){
                $('.abody').show();
                const sheet = document.querySelector('.assignment');
            html2pdf(sheet, {
                filename: 'Assignmet_cover_page.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: quality },
                jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
                
            })
            $('.abody').hide();
        }, 5000);
            
  })


 $(document).ready(function () {
    $('select').formSelect();
});
$(document).ready(function () {
    $('.datepicker').datepicker({ format: 'dd/mm/yyyy', selectMonths: true, selectYear: 5 });
});

$('#colorpicker').on('input', function() {
	$('#hexcolor').val(this.value);
});
  

 },
 "/exam": function(){
  app.innerHTML = `
  <form id="myform">
  <div class="head"><i class="icofont-clip-board"></i> Exam Coverpage</div>
  <center><small style="color: red;"><u><b>NB:</b></u> This exam cover page is not varified or granted by University yet. Please take permission from your teacher before using it.</small></center>
  <div class="input-field">
      <input type="text" name="name" required />
      <label for="name">Name of the Exam</label>
  </div>

  <div class="input-field">
      <input type="text" name="dept" required />
      <label for="name">Department</label>
  </div>
  <div class="input-field col s12">
      <select name="year" required>
          <option value="" disabled selected>Select Year</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
      </select>
  </div>

  <div class="input-field col s12">
      <select name="semester" required>
          <option value="" disabled selected>Select Semester</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
      </select>
  </div>

  <div class="input-field">
      <input type="text" name="id" required />
      <label for="id">ID No.</label>
  </div>

  <div class="input-field">
      <input type="text" name="reg" />
      <label for="reg">Registration No.</label>
  </div>

  <div class="input-field">
      <input type="text" name="session" />
      <label for="session">Session</label>
  </div>

  <div class="input-field">
      <input type="text" name="code" />
      <label for="code">Course Code</label>
  </div>

  <div class="input-field">
      <input type="text" name="title" />
      <label for="title">Course Title</label>
  </div>

  <div class="input-field">
      <input class="datepicker" type="text" name="date" />
      <label for="date">Date</label>
  </div>

  <div class="input-field">
      <input type="number" name="page" />
      <label for="page">Number of pages</label>
  </div>

  <div class="input-field col s12">
   <select name="quality" required>
       <option value="" disabled selected>Select Pdf Quality</option>
       <option value="2">Default(>300KB)</option>
       <option value="5">Medium(>800KB)</option>
       <option value="10">High(>2MB)</option>
   </select>
</div>

  <center><button class="btn red" id="gen" type="submit"><i class="icofont-file-pdf"></i> Generate Cover
          Page</button></center>
</form>

<div id="sheet">
  <div class="sbody">
      <div class="uni">BEGUM ROKEYA UNIVERSITY, RANGPUR</div>
      <div class="logo"><img src="./logo.jpeg"></div>
      <div class="headx2">ANSWER SCRIPT</div>
      <div class="flex1">
          <div class="table">
              <table class="tg">
                  <tr>
                      <td class="t1" colspan="2"> Answer script information</td>
                  </tr>
                  <tr>
                      <td class="t2">Number of pages</td>
                      <td class="t3">10</td>
                  </tr>
              </table>
          </div>

          <div class="contentx1">
              <div class="sl">Serial No:............................</div>
              <div class="sign">
                  <div class="st">Sign of the invigilator</div>
              </div>
          </div>
      </div>

      <div class="Form">

          <div class="r">
              <div class="r">
                  <div class="s1">Name of the Exam:</div>
                  <div class="name dot">1st Year 2nd Semester Final Examination</div>
              </div>
              <div class="r">
                  <div class="s2">20</div>
                  <div class="nyear dot">21</div>
              </div>
          </div>

          <div class="r">
              <div class="r">
                  <div class="s3">Department:</div>
                  <div class="dept dot">Computer Science & Engineering</div>
              </div>
              <div class="r">
                  <div class="s4">Year:</div>
                  <div class="year dot">1st</div>
              </div>

              <div class="r">
                  <div class="s5">Semester:</div>
                  <div class="semester dot">1st</div>
              </div>
          </div>


          <div class="r">
              <div class="r">
                  <div class="s6">ID No:</div>
                  <div class="id dot">1805027</div>
              </div>

              <div class="r">
                  <div class="s7">Registration No:</div>
                  <div class="reg dot">0000011376</div>
              </div>

              <div class="r">
                  <div class="s8">Session:</div>
                  <div class="session dot">2018-2019</div>
              </div>

          </div>

          <div class="r">
              <div class="r">
                  <div class="s9">Course code:</div>
                  <div class="code dot">CSE-12432</div>
              </div>

              <div class="r">
                  <div class="10">Course Title:</div>
                  <div class="title dot">Computer Fundamentals</div>
              </div>
          </div>

          <div class="r">
              <div class="r">
                  <div class="11">Date:</div>
                  <div class="date dot">20/12/2021</div>
              </div>
          </div>
      </div>

      <div class="inst">
          <div class="inhead"><u>Instruction for the Students</u></div>
          <ul>
              <ol>1. Students are forbidden to write their name in the answerscript.</ol>
              <ol>2. Rough exercise must be cancelled by examinee.</ol>
              <ol>3. Answerscript must be submitted on specified google classroom or via corresponding email
                  address converting in a single pdf.</ol>
              <ol>4. Examiniees must attend in the examination via zoom platform in video mode.</ol>
              <ol>5. Answerscript must be submiited whithin in one hour after end of the examination.</ol>
              <ol>6. No examinee is allowed to enter the virtual examination room after half an hour from the
                  beginning of the examination.</ol>
              <ol>7. No examinee is allowed to go out/leave from the virtual examination room during the
                  examination.</ol>
              <ol>8. Any unfair means are restricted at the virtual examination hall.</ol>
          </ul>
      </div>
  </div>
</div>
  `
  const form = document.querySelector("#myform");
        form.addEventListener('submit', e => {
            $('.loader').show();
            e.preventDefault();
            let y = (((new Date()).getFullYear()).toString());
            $('.name').text(form.name.value);
            $('.nyear').text(y[2] + y[3]);
            $('.dept').text(form.dept.value);
            $('.year').text(form.year.value);
            $('.semester').text(form.semester.value);
            $('.id').text(form.id.value);
            $('.reg').text(form.reg.value);
            $('.session').text(form.session.value);
            $('.code').text(form.code.value);
            $('.title').text(form.title.value);
            $('.date').text(form.date.value);
            $(".t3").text(form.page.value);
            const sheet = document.getElementById('sheet');
            let quality = parseInt(form.quality.value);
            setTimeout(function(){ $('.loader').hide();}, 5000);
            setTimeout(function(){
                $('.sbody').show();
                
            html2pdf(sheet, {
                filename: 'Exam_cover_page.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: quality},
                jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
            })
            $('.sbody').hide();
        }, 5000);
            
        });
        $(document).ready(function () {
            $('select').formSelect();
        });
        $(document).ready(function () {
            $('.datepicker').datepicker({ format: 'dd/mm/yyyy', selectMonths: true, selectYear: 5 });
        });
 }
}).resolve();