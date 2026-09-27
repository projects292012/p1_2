var add_details = document.getElementById('details_btn')
add_details.addEventListener('click', function(){
    var first_input = document.getElementById('first_input')
    var ok_1 = document.getElementById('ok_1')
    first_input.style.display = "flex"
    ok_1.addEventListener('click',add_details_func)
})
function add_details_func(){
    var name_txt = document.getElementById('name_input_txt')
    var age_txt = document.getElementById('age_input_txt')
    var date_txt = document.getElementById('date_input_txt')
    var registration = document.getElementById('reg_input_txt')
    var first_input = document.getElementById('first_input')
    var name_input = document.getElementById('name')
    var age_input = document.getElementById('age')
    var gender_input = document.getElementById('gender')
    const date = new Date()
    name_txt.textContent = name_input.value
    age_txt.textContent = age_input.value + "/" + gender_input.value
    date_txt.textContent = date.toDateString()
    first_input.style.display = "none"
    reg_no = Math.floor(Math.random()*10000000000)
    registration.textContent = reg_no
}
function add_blood_tr(){
    var table_blood = document.getElementById('blood_table')
    var test_input = document.getElementById('test')
    var result_input = document.getElementById('result')
    var unit_input = document.getElementById('unit')
    var reference_input = document.getElementById('reference')
    var tr_blood = document.createElement('tr')
    table_blood.appendChild(tr_blood)
    var test = document.createElement('td')
    var result = document.createElement('td')
    var unit = document.createElement('td')
    var reference = document.createElement('td')
    test.textContent = test_input.value
    result.textContent = reference_input.value
    unit.textContent = unit_input.value
    reference.textContent = result_input.value
    var delete_table = document.createElement('td')
    delete_table.classList.add('td_btn')
    var delete_btn = document.createElement('button')
    delete_btn.textContent = 'Delete'
    delete_table.appendChild(delete_btn)
    tr_blood.appendChild(test)
    tr_blood.appendChild(result)
    tr_blood.appendChild(unit)
    tr_blood.appendChild(reference)
    tr_blood.appendChild(delete_table)
    delete_btn.addEventListener('click',function(){
        tr_blood.remove()
    })
    test_div.style.display = "none"
}
function options_show(){
    var test_div = document.getElementById('test_div')
    test_div.style.display = "flex"
    var ok_3 = document.getElementById('ok_3')
    ok_3.addEventListener('click', add_blood_tr)

}
function title_add(){
    var blood_table = document.getElementById('blood_table')
    var title = prompt("Enter Title")
    var title_tr = document.createElement('tr')
    var title_td = document.createElement('td')
    title_h3 = document.createElement('h3')
    title_h3.textContent = title
    title_tr.classList.add('tr_title')
    blood_table.appendChild(title_tr)
    title_tr.appendChild(title_td)
    title_td.appendChild(title_h3)
    title_tr.addEventListener('click',function(){
        var check = window.confirm("Delete This Title")
        if (check == true) {
            title_tr.remove()
        }
        else{
            console.log('not deleted')
        }
    })
}
function ok_2_1() {
    var text_div_2 = document.getElementById('title_div')
    var ok_2 = document.getElementById('ok_2')
    var value_select;
    var text_div = document.getElementById('txt_div')
    value_select = text_div.value
    console.log(value_select)
    text_div_2.style.display = "none"
    if (value_select == "Details") {
         options_show()
     }
    else if (value_select == "Title") {
         title_add()
    }
    else{
        console.log('error')
    }
    value_select = null
}
var add_blood = document.getElementById('blood_btn')
add_blood.addEventListener('click',function(){
    var text_div_2 = document.getElementById('title_div')
    var ok_2 = document.getElementById('ok_2')
    text_div_2.style.display = "flex"
    ok_2.addEventListener('click',ok_2_1)
})
function physical_function(){
    var physical_input = document.getElementById('physical_input')
    var height_txt = document.getElementById('height_txt')
    var weight_txt = document.getElementById('weight_txt')
    var pulse_txt = document.getElementById('pulse_txt')
    var bmi_txt = document.getElementById('bmi_txt')
    var bp_txt = document.getElementById('bp_txt')
    var height_input = document.getElementById('height_input')
    var weight_input = document.getElementById('weight_input')
    var pulse_input = document.getElementById('pulse_input')
    var bp_input = document.getElementById('bp_input')
    var bmi = (Number(weight_input.value) / (Number(height_input.value) * Number(height_input.value))) * 10000
    var floored_bmi = Math.floor(bmi * 10) / 10
    console.log(floored_bmi)
    physical_input.style.display = "none"
    height_txt.textContent = height_input.value + "cm"
    weight_txt.textContent = weight_input.value + "kg"
    pulse_txt.textContent = pulse_input.value + "b/mt"
    bmi_txt.innerHTML = floored_bmi + "<br>" + "(Normal: 18.5 - 25 | Overweight: 25 - 30 | Obese > 30)";
    bp_txt.textContent = bp_input.value + "mm Hg"

}
var fill_btn = document.getElementById("fill")
fill.addEventListener('click',function(){
    var physical_input = document.getElementById('physical_input')
    physical_input.style.display = "flex"
    var ok_4 = document.getElementById('ok_4')
    ok_4.addEventListener('click',physical_function)
})
var eye_btn  = document.getElementById("eye_btn")
eye_btn.addEventListener('click',function(){
    var eye_input = document.getElementById('eye_input')
    eye_input.style.display = "flex"
    var ok_5 = document.getElementById('ok_5')
    ok_5.addEventListener('click',eye_function)
})
function eye_function(){
    var eye_input = document.getElementById('eye_input')
    var table_eye = document.getElementById('eye_table')
    var eye_input1 = document.getElementById('eye_input1')
    var distant_input = document.getElementById('distant_input')
    var near_input = document.getElementById('near_input')
    var color_input = document.getElementById('color_input')
    var tr_eye = document.createElement('tr')
    table_eye.appendChild(tr_eye)
    var eye = document.createElement('td')
    var distant = document.createElement('td')
    var near = document.createElement('td')
    var color = document.createElement('td')
    eye.textContent = eye_input1.value
    distant.textContent = distant_input.value
    near.textContent = near_input.value
    color.textContent = color_input.value
    var delete_table1 = document.createElement('td')
    delete_table1.classList.add('td_btn')
    var delete_btn1 = document.createElement('button')
    delete_btn1.textContent = 'Delete'
    delete_table1.appendChild(delete_btn1)
    tr_eye.appendChild(eye)
    tr_eye.appendChild(distant)
    tr_eye.appendChild(near)
    tr_eye.appendChild(color)
    tr_eye.appendChild(delete_table1)
    delete_btn1.addEventListener('click',function(){
        tr_eye.remove()
    })
    eye_input.style.display = "none"
}
var add_input = document.getElementById('add_notes')
add_input.addEventListener('click',function(){
    var remark = prompt("Enter Remark")
    var remark_div = document.getElementById('remarks')
    var remark_h3 = document.createElement('h3')
    remark_h3.textContent = remark
    remark_div.appendChild(remark_h3)
    remark_h3.addEventListener('click',function(){
        var check1 = window.confirm("Delete This Remark")
        if (check1 == true) {
            remark_h3.remove()
        }
        else{
            console.log('not deleted')
        }
    })
})
var submit_blood = document.getElementById('submit')
submit_blood.addEventListener('click',function(){
    var input1 = document.getElementById('input1')
    var input2 = document.getElementById('input2')
    var input3 = document.getElementById('input3')
    var input4 = document.getElementById('input4')
    var input5 = document.getElementById('input5')
    var input6 = document.getElementById('input6')
    var input7 = document.getElementById('input7')
    var input8 = document.getElementById('input8')
    var input9 = document.getElementById('input9')
    var input10 = document.getElementById('input10')
    var input11 = document.getElementById('input11')
    var input12 = document.getElementById('input12')
    var input13 = document.getElementById('input13')
    var input14 = document.getElementById('input14')
    if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == "" || input6.value == "" || input7.value == "" || input8.value == "" || input9.value == "" || input10.value == "" || input11.value == "" || input12.value == "" || input13.value == "" || input14.value == "") {
        alert('Complete All Fields Before Submiting')
    }
    else{
        input1.style.backgroundColor = "transparent"
        input1.style.border = "none"
        input1.disabled = "true"
        input2.style.backgroundColor = "transparent"
        input2.style.border = "none"
        input2.disabled = "true"
        input3.style.backgroundColor = "transparent"
        input3.style.border = "none"
        input3.disabled = "true"
        input4.style.backgroundColor = "transparent"
        input4.style.border = "none"
        input4.disabled = "true"
        input5.style.backgroundColor = "transparent"
        input5.style.border = "none"
        input5.disabled = "true"
        input6.style.backgroundColor = "transparent"
        input6.style.border = "none"
        input6.disabled = "true"
        input7.style.backgroundColor = "transparent"
        input7.style.border = "none"
        input7.disabled = "true"
        input8.style.backgroundColor = "transparent"
        input8.style.border = "none"
        input8.disabled = "true"
        input9.style.backgroundColor = "transparent"
        input9.style.border = "none"
        input9.disabled = "true"
        input10.style.backgroundColor = "transparent"
        input10.style.border = "none"
        input10.disabled = "true"
        input11.style.backgroundColor = "transparent"
        input11.style.border = "none"
        input11.disabled = "true"
        input12.style.backgroundColor = "transparent"
        input12.style.border = "none"
        input12.disabled = "true"
        input13.style.backgroundColor = "transparent"
        input13.style.border = "none"
        input13.disabled = "true"
        input14.style.backgroundColor = "transparent"
        input14.style.border = "none"
        input14.disabled = "true"
        if (Number(input1.value >= 13.5 && input1.value <=18.5)) {
            input1.style.color = "black"
        }
        else{
            input1.style.color = "black"
            input1.style.fontWeight = "bold"
        }
        if (Number(input2.value >= 4400 && input1.value <= 110000)) {
            input2.style.color = "black"
        }
        else{
            input2.style.color = "black"
            input2.style.fontWeight = "bold"
        }
        if (Number(input2.value >= 4400 && input1.value <= 110000)) {
            input2.style.color = "black"
        }
        else{
            input2.style.color = "black"
            input2.style.fontWeight = "bold"
        }
        if (Number(input3.value >= 1.5 && input1.value <= 4.5)) {
            input3.style.color = "black"
        }
        else{
            input3.style.color = "black"
            input3.style.fontWeight = "bold"
        }
    }
})
var submit_eye = document.getElementById('submit1')
submit_eye.addEventListener('click',function(){
    var input15 = document.getElementById('input15')
    var input16 = document.getElementById('input16')
    var input17 = document.getElementById('input17')
    var input18 = document.getElementById('input18')
    var input19 = document.getElementById('input19')
    var input20 = document.getElementById('input20')
    if (input15.value == "" || input16.value == "" || input17.value == "" || input18.value == "" || input19.value == "" || input20.value == "") {
        alert('Complete All Fields Before Submiting')
    }
    else{
        input15.style.backgroundColor = "transparent"
        input15.style.border = "none"
        input15.disabled = "true"
        input16.style.backgroundColor = "transparent"
        input16.style.border = "none"
        input16.disabled = "true"
        input17.style.backgroundColor = "transparent"
        input17.style.border = "none"
        input17.disabled = "true"
        input18.style.backgroundColor = "transparent"
        input18.style.border = "none"
        input18.disabled = "true"
        input19.style.backgroundColor = "transparent"
        input19.style.border = "none"
        input19.disabled = "true"
        input20.style.backgroundColor = "transparent"
        input20.style.border = "none"
        input20.disabled = "true"
    }
})
function delete_tr(button_para){
    button_para.closest('tr').remove()
}
function download_elements(){
    var input_all_1 = document.querySelectorAll('input')
     input_all_1.forEach(function(input) {
        input.style.backgroundColor = "transparent"; 
        input.style.border = "none"; 
        input.style.color = "black"; 
        input.disabled = true; // Use boolean true, not a string
    });
    var button_all_1 = document.querySelectorAll('button')
    button_all_1.forEach(function(button) {
        button.style.display = "none"; 
    });
}
async function download_pdf() {
    download_elements()
    try {

        const report = document.getElementById("medical_report");

        // Capture the complete report
        const canvas = await html2canvas(report, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff"
        });

        const { jsPDF } = window.jspdf;

        // Create A4 PDF
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = 190;
        const pdfHeight = 277;

        // Calculate image dimensions
        const imgWidth = pdfWidth;
        const imgHeight =
            (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 10;

        // Add first page
        pdf.addImage(
            canvas.toDataURL("image/png"),
            "PNG",
            10,
            position,
            imgWidth,
            imgHeight
        );

        heightLeft -= pdfHeight;

        // Add remaining pages
        while (heightLeft > 0) {

            position = heightLeft - imgHeight + 10;

            pdf.addPage();

            pdf.addImage(
                canvas.toDataURL("image/png"),
                "PNG",
                10,
                position,
                imgWidth,
                imgHeight
            );

            heightLeft -= pdfHeight;
        }

        // Download
        pdf.save("Hospital_Medical_Report.pdf");

    } catch (error) {

        console.error("PDF Error:", error);

        alert("PDF could not be generated. Please check the console.");

    }
}
