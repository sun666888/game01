import Clipboard from 'clipboard';
export default function Clip(event, text) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  });
  clipboard.on('success', () => {
    // console.log('复制成功');
    clipboard.off('error');
    clipboard.off('success');
    clipboard.destroy();
  });
  clipboard.on('error', () => {
    // console.log('复制失败，请刷新试试');
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  });
  clipboard.onClick(event);
};