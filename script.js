// Example vendor data
const vendors = [
  {
    name: "ABC Traders",
    email: "abc@example.com",
    contact: "9876543210",
    vendorId: "V001",
    gstId: "29ABCDE1234F1Z5"
  },
  {
    name: "Global Supplies",
    email: "global@supplies.com",
    contact: "9123456789",
    vendorId: "V002",
    gstId: "22XYZAB1234L6Z2"
  },
  {
    name: "Smart Tech",
    email: "smart@tech.com",
    contact: "9001122334",
    vendorId: "V003",
    gstId: "07PQRS5678K9Z1"
  }
];

// Add rows to table
const tbody = document.querySelector("#vendorTable tbody");

vendors.forEach((vendor, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${vendor.name}</td>
    <td>${vendor.email}</td>
    <td>${vendor.contact}</td>
    <td>${vendor.vendorId}</td>
    <td>${vendor.gstId}</td>
  `;

  tbody.appendChild(row);
});
