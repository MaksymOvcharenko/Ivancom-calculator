function getStatus() {
  const ttnNumber = document.getElementById("ttnNumber").value;

  let data = {
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: ttnNumber,
          Phone: "380958010474", // Ваш номер телефона здесь
        },
      ],
    },
  };

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Key": "52b2a820031f0bd5fec0387308cdb06b",
    },
    body: JSON.stringify(data),
  };

  fetch("https://api.novaposhta.ua/v2.0/json/", options)
    .then((response) => response.json())
    .then((data) => {
      const documentWeight = data.data[0].DocumentWeight;
      const senderFullName = data.data[0].SenderFullNameEW;
      const documentCost = data.data[0].DocumentCost;
      const payerType = data.data[0].PayerType;
      const announcedPrice = data.data[0].AnnouncedPrice;

      // Отображаем полученные данные на странице
      document.getElementById("documentWeight").textContent = documentWeight;
      document.getElementById("senderFullName").textContent = senderFullName;
      document.getElementById("documentCost").textContent = documentCost;
      document.getElementById("payerType").textContent = payerType;
      document.getElementById("announcedPrice").textContent = announcedPrice;

      // Показываем результаты
      document.getElementById("result").classList.remove("hidden");
    })
    .catch((error) => console.error("Ошибка:", error));
}
