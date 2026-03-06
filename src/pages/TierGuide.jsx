import { useNavigate } from "react-router-dom";

import tier1 from "../assets/1.png";
import tier2 from "../assets/2.png";
import tier3 from "../assets/3.png";
import tier4 from "../assets/4.png";
import tier5 from "../assets/5.png";

export default function TierInfo() {
  const nav = useNavigate();

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: 20,
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <button
          onClick={() => nav(-1)}
          style={{
            marginRight: 12,
            fontSize: 20,
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          ←
        </button>

        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          커뮤니티 티어 안내
        </h1>
      </div>

      {/* 공통 안내 */}
      <div
        style={{
          background: "#EEF2FF",
          padding: 16,
          borderRadius: 16,
          marginBottom: 24,
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: 6 }}>
          🎁 레벨 상승 공통 혜택
        </p>

        <p style={{ color: "#4B5563" }}>
          모든 레벨은 승급 시 상담지원 쿠폰 100%가 지급됩니다.
        </p>

        <p style={{ color: "#4B5563", marginTop: 6 }}>
          티어는 게시물 수와 댓글 수를 기준으로 자동 산정됩니다.
        </p>
      </div>

      {/* 티어 */}
      <TierCard
        image={tier1}
        name="브론즈"
        level={1}
        condition="게시물 1개 이상 + 댓글 1개 이상"
      />

      <TierCard
        image={tier2}
        name="실버"
        level={2}
        condition="게시물 30개 이상 + 댓글 30개 이상"
      />

      <TierCard
        image={tier3}
        name="골드"
        level={3}
        condition="게시물 100개 이상 + 댓글 100개 이상"
      />

      <TierCard
        image={tier4}
        name="다이아몬드"
        level={4}
        condition="게시물 300개 이상 + 댓글 500개 이상"
      />

      <TierCard
        image={tier5}
        name="레드다이아몬드"
        level={5}
        condition="게시물 500개 이상 + 댓글 1,000개 이상"
      />
    </div>
  );
}

/* ===========================
   🎴 티어 카드
=========================== */

function TierCard({ image, name, level, condition, benefit }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#FFFFFF",
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={image}
        style={{
          width: 60,
          height: 60,
          marginRight: 16,
          objectFit: "contain",
        }}
      />

      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          {name} ({level})
        </p>

        <p
          style={{
            marginTop: 6,
            color: "#6B7280",
          }}
        >
          {condition}
        </p>

        {benefit && (
          <p
            style={{
              marginTop: 8,
              fontWeight: 600,
              color: "#4F46E5",
            }}
          >
            {benefit}
          </p>
        )}
      </div>
    </div>
  );
}