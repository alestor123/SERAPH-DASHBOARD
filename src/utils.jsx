import L from 'leaflet';
import { Cloud, Shield, Flame, Zap, AlertTriangle } from 'lucide-react';
import React from 'react';

export const getIconForType = (type) => {
  const iconUrl = {
    "disaster": "🌀",
    "war": "🛡️",
    "conflict": "⚔️",
    "airstrike": "✈️",
    "explosion": "💥",
    "missile": "🚀",
    "earthquake": "🌍",
    "flood": "🌊",
    "cyclone": "🌀",
    "hurricane": "🌪️",
    "volcano": "🌋",
    "terror attack": "💣",
    "civil unrest": "🚨",
    "genocide": "☠️",
    "refugee crisis": "🧳",
  }[type] || "❗";

  return L.divIcon({
    html: `<div style="font-size: 24px">${iconUrl}</div>`,
    className: "",
    iconSize: [30, 30],
    iconAnchor: [15, 30]
  });
};

export const getEventIcon = (type) => {
  const iconProps = { size: 20, color: "white" };
  switch (type) {
    case 'hurricane':
      return <Cloud {...iconProps} color="#60A5FA" />;
    case 'war':
      return <Shield {...iconProps} color="#F87171" />;
    case 'fire':
      return <Flame {...iconProps} color="#FBBF24" />;
    case 'explosion':
      return <Zap {...iconProps} color="#FDE047" />;
    default:
      return <AlertTriangle {...iconProps} color="#F59E0B" />;
  }
};

export const getEventColor = (type) => {
  switch (type) {
    case 'hurricane':
      return { borderColor: '#60A5FA', backgroundColor: 'rgba(96, 165, 250, 0.2)' };
    case 'war':
      return { borderColor: '#F87171', backgroundColor: 'rgba(248, 113, 113, 0.2)' };
    case 'fire':
      return { borderColor: '#FBBF24', backgroundColor: 'rgba(251, 191, 36, 0.2)' };
    case 'explosion':
      return { borderColor: '#FDE047', backgroundColor: 'rgba(253, 224, 71, 0.2)' };
    default:
      return { borderColor: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.2)' };
  }
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};