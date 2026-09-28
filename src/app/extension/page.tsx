import ExtensionPopup from "@/components/extension/ExtensionPopup";

import {
  extensionHistory,
  extensionModels,
  quickActions,
} from "@/data/extension";

export default function ExtensionPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070d] p-4 sm:p-8">
      <div className="w-full max-w-[420px]">
        <ExtensionPopup
          models={extensionModels}
          history={extensionHistory}
          actions={quickActions}
        />
      </div>
    </main>
  );
}