using Microsoft.AspNetCore.Http;

namespace My.Admin.Service.Admin.Document.Input
{
    public class DocumentUploadImageInput
    {
        /// <summary>
        /// �ϴ��ļ�
        /// </summary>
        public IFormFile File { get; set; }

        /// <summary>
        /// �ĵ����
        /// </summary>
        public long Id { get; set; }
    }
}