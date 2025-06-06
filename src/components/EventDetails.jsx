import React, { useState } from 'react';
import { ExternalLink, MapPin, FileDown } from 'lucide-react';
import { formatDate } from '../utils';
import { marked } from 'marked';
import html2pdf from 'html2pdf.js';

const styles = {
    // ... (keep all the existing styles)
    selectedEventPanel: {
      borderTop: '1px solid rgba(96, 165, 250, 0.3)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: '16px'
    },
    selectedEventHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px'
    },
    headerActions: {
        display: 'flex',
        gap: '16px',
    },
    selectedEventTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#60A5FA'
    },
    selectedEventLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '10px',
      color: '#60A5FA',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    selectedEventDetails: {
      fontSize: '10px'
    },
    detailRow: {
      marginBottom: '8px'
    },
    detailLabel: {
      color: '#9CA3AF'
    },
    detailValue: {
      marginLeft: '8px',
      color: 'white'
    },
    reportButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '10px',
        fontFamily: 'Courier New, monospace',
        color: '#60A5FA',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0
    },
    reportButtonDisabled: {
        cursor: 'not-allowed',
        color: '#9CA3AF'
    }
}

const EventDetails = ({ event }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!event) return null;

  const handleGenerateReport = async () => {
    if (!event || !event.url) {
        alert("Source URL is missing.");
        return;
    }
    
    setIsGenerating(true);
    
    try {
        // 1. Fetch the markdown content
        const dossierUrl = `http://localhost:3000/api/v1/dossier?url=${encodeURIComponent(event.url)}`;
        const response = await fetch(dossierUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch report. Status: ${response.status}`);
        }

        const markdown = await response.text();

        // 2. Convert Markdown to HTML
        const html = marked.parse(markdown);

        // Create a temporary element to style the PDF content
        const element = document.createElement('div');
        element.innerHTML = html;
        element.style.padding = '40px';
        element.style.fontFamily = 'Helvetica, Arial, sans-serif';
        element.style.fontSize = '12px';
        element.style.lineHeight = '1.6';
        element.style.color = '#333';

        // 3. Convert HTML to PDF and trigger download
        const pdfOptions = {
            margin:       [0.5, 0.5, 0.5, 0.5],
            filename:     `SERAPH_Report_${event.title.replace(/[^a-z0-9]/gi, '_')}.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(element).set(pdfOptions).save();

    } catch (error) {
        console.error("Error generating report:", error);
        alert(`Could not generate the report: ${error.message}`);
    } finally {
        setIsGenerating(false);
    }
  };

  return (
    <div style={styles.selectedEventPanel}>
      <div style={styles.selectedEventHeader}>
        <h3 style={styles.selectedEventTitle}>SELECTED EVENT</h3>
        <div style={styles.headerActions}>
            <button
              onClick={handleGenerateReport}
              disabled={isGenerating}
              style={{
                ...styles.reportButton,
                ...(isGenerating ? styles.reportButtonDisabled : {})
              }}
              className="selected-event-link" // Use same class for hover effect
            >
              <FileDown size={12} />
              <span>{isGenerating ? 'GENERATING...' : 'VIEW REPORT'}</span>
            </button>
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.selectedEventLink}
              className="selected-event-link"
            >
              <ExternalLink size={12} />
              <span>VIEW SOURCE</span>
            </a>
        </div>
      </div>
      <div style={styles.selectedEventDetails}>
        {/* ... keep the rest of the JSX the same */}
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Author:</span>
          <span style={styles.detailValue}>{event.author || 'Unknown'}</span>
        </div>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Published:</span>
          <span style={styles.detailValue}>{formatDate(event.publishedAt)}</span>
        </div>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Location:</span>
          <span style={styles.detailValue}>
            {event.lat.toFixed(4)}, {event.long.toFixed(4)}
          </span>
        </div>
        <div style={styles.detailRow}>
          <a
            href={event.gmapLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.selectedEventLink}
            className="selected-event-link"
          >
            <MapPin size={12} />
            <span>View on Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;