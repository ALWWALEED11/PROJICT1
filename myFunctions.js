$(document).ready(function () {

  // أزرار التفاصيل للصفوف الثابتة
  $(".show-details-btn").on("click", function() {
    const targetId = $(this).data("target");
    const $row = $("#" + targetId);
    $row.toggle();
    $(this).text($row.is(":visible") ? "إخفاء التفاصيل" : "إظهار التفاصيل");
  });

  
   /** 📄 صفحة إضافة تطبيق (add_app.html)
   **************************************************/
  $("#submitBtn").on("click", function () {
    const name = $("#appName").val().trim();
    const company = $("#company").val().trim();
    const website = $("#website").val().trim();
    const free = $("#free").val();
    const field = $("#field").val();
    const desc = $("#description").val().trim();

    // أنماط التحقق
    const namePattern = /^[A-Za-z\s]+$/;
    const companyPattern = /^[A-Za-z\s]+$/;
    const urlPattern = /^(https?:\/\/)([^\s.]+\.[^\s]{2,}|localhost[:?\d]*)\S*$/i;

    // التحقق من المدخلات
    if (!namePattern.test(name)) {
      alert("❌ اسم التطبيق يجب أن يحتوي على أحرف إنجليزية فقط (يمكن أن يحتوي على مسافات).");
      return;
    }

    if (!companyPattern.test(company)) {
      alert("❌ اسم الشركة يجب أن يحتوي على أحرف إنجليزية فقط (يمكن أن يحتوي على مسافات).");
      return;
    }

    if (!urlPattern.test(website)) {
      alert("❌ الرجاء إدخال رابط موقع صالح يبدأ بـ http أو https.");
      return;
    }

    if (desc.length < 10) {
      alert("❌ الرجاء إدخال وصف لا يقل عن 10 أحرف.");
      return;
    }

    // إنشاء التطبيق الجديد وتخزينه
    const newApp = { name, company, website, free, field, desc };
    const apps = JSON.parse(localStorage.getItem("apps")) || [];
    apps.push(newApp);
    localStorage.setItem("apps", JSON.stringify(apps));

    alert("✅ تم حفظ التطبيق بنجاح! سيتم نقلك إلى صفحة التطبيقات.");
    window.location.href = "apps.html";
  });

  // زر إعادة التعيين
  $("#resetBtn").on("click", function () {
    $("#appForm")[0].reset();
  });

}); // نهاية document.ready

