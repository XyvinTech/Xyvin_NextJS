// components/CardComponent.js
export default function CardComponent() {
    return (
      <div className="relative -mt-20 -mb-30">
        {/* Card Container */}
        <div
          className="absolute mt-9 -bottom-1/2 right-1/2 flex flex-wrap flex-column  transform -translate-x-1/2 bg-slate-300 shadow-lg rounded-lg p-8"
          style={{ height: '500px', width: '800px' }}
        >
          <h2 className="text-3xl font-bold mb-4">Custom CRM Software Tuned
          with Your Goals</h2>
          <p className="text-lg text-gray-700">
          As a strategic business asset, custom CRM development helps companies manage and automate
their customer interactions. By streamlining tasks and keeping track of customer data, CRM
systems reduce the time and effort associated with customer interactions, while optimizing sales
cycles and identifying upselling opportunities. 
          </p>
          <p className="break-before-column">CleverDev Software  assists global companies in developing, migrating, and adopting custom CRM solutions. Make the most of customer data, improve retention, and facilitate internal
          communication — all these within a single interface.</p>
        </div>
      </div>
    );
  }
  