import React, { useContext } from "react";

import {
  CheckCircle,
  Clock,
  Users,
  ClipboardList,
  DollarSign,
  Receipt,
} from "lucide-react";
import { AppContext } from "../../Context/AppContext";

const DashboardOverview = () => {
  const { chores, roommates, expenses } = useContext(AppContext);

  const totalChores = chores.length;
  const completed = chores.filter((c) => c.completed).length;
  const pending = totalChores - completed;
  const totalRoommates = roommates.length;

  const totalSpent = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);
  const totalExpenses = expenses.length;

  const cards = [
    {
      label: "Total Chores",
      value: totalChores,
      icon: <ClipboardList className="text-blue-600" size={22} />,
      bg: "bg-blue-100",
    },
    {
      label: "Completed",
      value: completed,
      icon: <CheckCircle className="text-green-600" size={22} />,
      bg: "bg-green-100",
    },
    {
      label: "Pending",
      value: pending,
      icon: <Clock className="text-yellow-600" size={22} />,
      bg: "bg-yellow-100",
    },
    {
      label: "Roommates",
      value: totalRoommates,
      icon: <Users className="text-purple-600" size={22} />,
      bg: "bg-purple-100",
    },
    {
      label: "Total Expenses",
      value: totalExpenses,
      icon: <Receipt className="text-rose-600" size={22} />,
      bg: "bg-rose-100",
    },
    {
      label: "Total Spent",
      value: `Rs. ${totalSpent.toLocaleString()}`,
      icon: <DollarSign className="text-emerald-600" size={22} />,
      bg: "bg-emerald-100",
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 py-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 p-4 rounded-xl shadow-sm ${card.bg} transition-transform hover:scale-[1.02]`}
        >
          <div className="p-2 bg-white rounded-full shadow">{card.icon}</div>
          <div>
            <p className="text-sm text-gray-600 font-medium">{card.label}</p>
            <p className="text-lg font-bold text-gray-800">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;