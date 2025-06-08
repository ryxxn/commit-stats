# Commit Stats

> 깃허브 커밋 수, PR, 이슈 등의 정보를 시각화하여 `README`에 표시할 수 있습니다.

---

## 사용 방법

1. 프로젝트 클론

```bash
git clone https://github.com/ryxxn/commit-stats.git
```

---

2. `.env` 파일 추가

프로젝트 루트 디렉토리에 `.env` 파일 추가 후  

```
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username
```

해당 내용 작성 후 저장

---

3. `vercel` 배포 후 `README`에 추가
```md
<-- Other -->

<img src="https://your-vercel-url/api/stats" alt="GitHub Stats Card" />

<-- Other -->
```

---
